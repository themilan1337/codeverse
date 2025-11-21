import { Itinerary } from '../../models/Itinerary'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    try {
        const itinerary = await Itinerary.create(body)
        return {
            success: true,
            id: itinerary._id
        }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            message: error.message || 'Failed to save itinerary'
        })
    }
})
