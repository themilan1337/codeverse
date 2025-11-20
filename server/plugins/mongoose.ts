import mongoose from 'mongoose'

export default defineNitroPlugin(async (nitroApp) => {
    const config = useRuntimeConfig()
    const uri = config.mongodbUri || process.env.MONGODB_URI

    if (!uri) {
        console.warn('MongoDB URI not found, skipping connection.')
        return
    }

    try {
        // Check if we already have a connection
        if (mongoose.connection.readyState === 1) {
            console.log('MongoDB already connected')
            return
        }

        await mongoose.connect(uri, {
            bufferCommands: false, // Disable buffering to fail fast if not connected
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of default 30s
        })
        console.log('Connected to MongoDB')
    } catch (e) {
        console.error('Error connecting to MongoDB:', e)
    }
})
