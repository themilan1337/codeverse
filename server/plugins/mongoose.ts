import mongoose from 'mongoose'

export default defineNitroPlugin(async (nitroApp) => {
    const config = useRuntimeConfig()
    const uri = config.mongodbUri || process.env.MONGODB_URI

    if (!uri) {
        console.warn('MongoDB URI not found, skipping connection.')
        return
    }

    try {
        await mongoose.connect(uri)
        console.log('Connected to MongoDB')
    } catch (e) {
        console.error('Error connecting to MongoDB:', e)
    }
})
