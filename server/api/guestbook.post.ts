import { defineEventHandler, readBody, createError } from 'h3'
import { GuestbookEntry } from '../models/GuestbookEntry'
import fs from 'node:fs'
import path from 'node:path'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        if (!body.message && !body.signature) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Message or signature is required'
            })
        }

        let signaturePath = ''

        if (body.signature && body.signature.startsWith('data:image')) {
            // Save image to filesystem
            const base64Data = body.signature.replace(/^data:image\/\w+;base64,/, '')
            const buffer = Buffer.from(base64Data, 'base64')

            const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.png`
            const uploadDir = path.join(process.cwd(), 'public/assets/images/wishes')

            // Ensure directory exists
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true })
            }

            const filePath = path.join(uploadDir, fileName)
            fs.writeFileSync(filePath, buffer)

            signaturePath = `/assets/images/wishes/${fileName}`
        } else {
            signaturePath = body.signature || ''
        }

        const newEntry = await GuestbookEntry.create({
            message: body.message || '',
            signature: signaturePath,
            author: body.author || 'Anonymous',
            color: body.color || '#000000'
        })

        return {
            success: true,
            entry: {
                id: newEntry._id,
                message: newEntry.message,
                signature: newEntry.signature,
                author: newEntry.author,
                createdAt: newEntry.createdAt,
                color: newEntry.color
            }
        }
    } catch (error) {
        console.error('Error saving guestbook entry:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to save entry'
        })
    }
})
