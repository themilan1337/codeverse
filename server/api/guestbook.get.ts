import { defineEventHandler } from 'h3'
import { GuestbookEntry } from '../models/GuestbookEntry'

export default defineEventHandler(async (event) => {
    try {
        const entries = await GuestbookEntry.find().sort({ createdAt: -1 }).limit(100)
        return entries.map(entry => ({
            id: entry._id,
            message: entry.message,
            signature: entry.signature,
            author: entry.author,
            createdAt: entry.createdAt,
            color: entry.color
        }))
    } catch (error) {
        console.error('Error fetching guestbook entries:', error)
        return []
    }
})
