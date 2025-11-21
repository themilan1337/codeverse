import { Itinerary } from '../../models/Itinerary'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    try {
        const itinerary = await Itinerary.findById(id)

        if (!itinerary) {
            throw createError({
                statusCode: 404,
                message: 'Itinerary not found'
            })
        }

        return itinerary
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            message: error.message || 'Failed to fetch itinerary'
        })
    }
})
