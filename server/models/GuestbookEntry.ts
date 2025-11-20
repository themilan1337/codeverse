import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    message: { type: String, default: '' },
    signature: { type: String, default: '' }, // Will store Base64 string directly
    author: { type: String, default: 'Anonymous' },
    color: { type: String, default: '#000000' },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true })

export const GuestbookEntry = mongoose.models.GuestbookEntry || mongoose.model('GuestbookEntry', schema)
