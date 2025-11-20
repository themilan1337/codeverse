import { defineEventHandler } from 'h3'
import fs from 'node:fs'
import path from 'node:path'

const DATA_FILE = path.resolve(process.cwd(), 'server/data/guestbook.json')

export default defineEventHandler(async (event) => {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            return []
        }
        const data = fs.readFileSync(DATA_FILE, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.error('Error reading guestbook data:', error)
        return []
    }
})
