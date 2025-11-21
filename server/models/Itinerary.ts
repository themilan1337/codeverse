import mongoose from 'mongoose'

const itinerarySchema = new mongoose.Schema({
    season: {
        type: String,
        required: true
    },
    preferences: {
        type: [String],
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    travelStyle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export interface IItinerary extends mongoose.Document {
    season: string
    preferences: string[]
    budget: string
    travelStyle: string
    content: string
    createdAt: Date
}

export const Itinerary: mongoose.Model<IItinerary> = mongoose.models.Itinerary as mongoose.Model<IItinerary> || mongoose.model<IItinerary>('Itinerary', itinerarySchema)
