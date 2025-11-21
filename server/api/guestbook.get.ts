import { defineEventHandler } from 'h3'
import { GuestbookEntry } from '../models/GuestbookEntry'
import mongoose from 'mongoose'

export default defineEventHandler(async (event) => {
    try {
        // Ensure connection is ready
        if (mongoose.connection.readyState !== 1) {
            const config = useRuntimeConfig()
            const uri = config.mongodbUri || process.env.MONGODB_URI
            if (uri) {
                await mongoose.connect(uri, { bufferCommands: false })
            }
        }

        const entries = await GuestbookEntry.find().sort({ createdAt: -1 }).limit(100)
        return entries.map((entry: any) => ({
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
