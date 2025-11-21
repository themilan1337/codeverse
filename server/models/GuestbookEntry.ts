import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    message: { type: String, default: '' },
    signature: { type: String, default: '' }, // Will store Base64 string directly
    author: { type: String, default: 'Anonymous' },
    color: { type: String, default: '#000000' },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true })

// Disable buffering for this model
schema.set('bufferCommands', false);

export interface IGuestbookEntry extends mongoose.Document {
    message: string
    signature: string
    author: string
    color: string
    createdAt: Date
}

export const GuestbookEntry: mongoose.Model<IGuestbookEntry> = mongoose.models.GuestbookEntry as mongoose.Model<IGuestbookEntry> || mongoose.model<IGuestbookEntry>('GuestbookEntry', schema)
