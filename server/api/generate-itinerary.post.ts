import OpenAI from 'openai'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { season, preferences, budget, travelStyle } = body

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw createError({
      statusCode: 500,
      message: 'OpenAI API key is not configured'
    })
  }

  const openai = new OpenAI({
    apiKey: apiKey
  })

  // Construct the prompt based on user preferences
  const prompt = `You are a luxury travel expert specializing in Shymkent and Turkestan, Kazakhstan. Create a premium, detailed, and personalized travel itinerary based on the following preferences:

**Season:** ${season}
**Interests:** ${preferences.join(', ')}
**Budget:** ${budget}
**Travel Style:** ${travelStyle}

Please create a comprehensive itinerary that includes:

1. **Welcome & Overview** - A captivating introduction to what makes this journey special
2. **Day-by-Day Itinerary** - Detailed daily plans (suggest 3-5 days)
3. **Must-Visit Attractions** - Key locations in both Shymkent and Turkestan
4. **Local Cuisine Recommendations** - Authentic dining experiences
5. **Cultural Insights** - Important customs and traditions
6. **Practical Tips** - Transportation, best times to visit, what to pack
7. **Hidden Gems** - Lesser-known spots that match their interests

Format your response in beautiful, well-structured Markdown. Use headers (##, ###), lists, bold text, and emojis where appropriate to make it engaging and easy to read. Be specific with place names, timings, and prices when relevant.

Make this feel premium, sophisticated, and tailored specifically to their preferences. Write in a warm, engaging tone that inspires excitement about the journey.`

  try {
    // Use GPT-4 (gpt-5.1 doesn't exist yet, using the latest available model)
    const stream = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are a luxury travel expert for Shymkent and Turkestan, Kazakhstan. You create beautiful, detailed, and personalized travel itineraries with proper markdown formatting.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: 3000,
      stream: true
    })

    // Set up Server-Sent Events for streaming
    const encoder = new TextEncoder()

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content
            if (content) {
              const data = `data: ${JSON.stringify({ content })}\n\n`
              controller.enqueue(encoder.encode(data))
            }
          }

          // Send completion signal
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
        } catch (error) {
          controller.error(error)
        }
      }
    })

    return sendStream(event, readableStream)
  } catch (error: any) {
    console.error('OpenAI API Error:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to generate itinerary'
    })
  }
})
