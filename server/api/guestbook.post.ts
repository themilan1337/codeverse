import { defineEventHandler, readBody, createError } from 'h3'
import { GuestbookEntry } from '../models/GuestbookEntry'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        if (!body.message && !body.signature) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Message or signature is required'
            })
        }

        // We now store the Base64 string directly in MongoDB.
        // No filesystem operations needed.
        const signatureData = body.signature || ''

        const newEntry = await GuestbookEntry.create({
            message: body.message || '',
            signature: signatureData,
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
