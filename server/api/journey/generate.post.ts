import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { season, preferences, budget, travelStyle } = body

    if (!season || !preferences || !budget || !travelStyle) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing required fields',
        })
    }

    const prompt = `
    You are an expert travel concierge specializing in luxury and culturally rich experiences in Shymkent and Turkistan, Kazakhstan.
    
    Create a personalized, premium travel itinerary based on the following user profile:
    - **Season**: ${season}
    - **Interests**: ${preferences.join(', ')}
    - **Budget Level**: ${budget}
    - **Travel Style**: ${travelStyle}

    **Requirements:**
    1. **Tone**: Sophisticated, inviting, and knowledgeable. Use evocative language.
    2. **Structure**:
       - **Introduction**: A warm, personalized welcome acknowledging their specific travel style and season.
       - **Highlights**: 3-4 key experiences perfectly matched to their interests.
       - **Itinerary**: A day-by-day breakdown (suggest 3 days) with specific locations, dining recommendations (focusing on local gastronomy), and cultural nuances.
       - **Practical Tips**: Brief advice on transport, etiquette, or packing for the specific season.
    3. **Formatting**: Use Markdown. Use bolding for emphasis, bullet points for readability, and headers for sections.
    4. **Content**: Focus on "hidden gems" alongside major attractions. Mention specific restaurant names if possible.
    
    Make it feel like a bespoke document crafted just for them.
  `

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-5.1',
            messages: [
                { role: 'system', content: 'You are a premium travel assistant for Shymkent and Turkistan.' },
                { role: 'user', content: prompt },
            ],
            temperature: 0.7,
        })

        return {
            result: completion.choices[0].message.content,
        }
    } catch (error: any) {
        console.error('OpenAI API Error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to generate itinerary',
        })
    }
})
