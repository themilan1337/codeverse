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

export const Itinerary = mongoose.models.Itinerary || mongoose.model('Itinerary', itinerarySchema)
