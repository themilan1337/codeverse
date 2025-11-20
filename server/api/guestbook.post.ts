import { defineEventHandler, readBody } from 'h3'
import fs from 'node:fs'
import path from 'node:path'

const DATA_FILE = path.resolve(process.cwd(), 'server/data/guestbook.json')

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        if (!body.message && !body.signature) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Message or signature is required'
            })
        }

        const newEntry = {
            id: Date.now().toString(),
            message: body.message || '',
            signature: body.signature || '', // Base64 string
            author: body.author || 'Anonymous',
            createdAt: new Date().toISOString(),
            color: body.color || '#000000'
        }

        let entries = []
        if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf-8')
            try {
                entries = JSON.parse(fileContent)
            } catch (e) {
                entries = []
            }
        }

        // Add new entry to the beginning
        entries.unshift(newEntry)

        // Limit to last 100 entries to prevent file from growing too large for this demo
        if (entries.length > 100) {
            entries = entries.slice(0, 100)
        }

        fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2))

        return { success: true, entry: newEntry }
    } catch (error) {
        console.error('Error saving guestbook entry:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to save entry'
        })
    }
})
