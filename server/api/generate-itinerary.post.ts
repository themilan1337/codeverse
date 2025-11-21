import OpenAI from 'openai'
import destinations from '../../app/data/destinations.json'

import fs from 'node:fs'
import path from 'node:path'

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

  // Dynamically get all images from public/assets/images
  const imagesDir = path.join(process.cwd(), 'public', 'assets', 'images')
  let allImages: string[] = []

  try {
    const files = fs.readdirSync(imagesDir)
    allImages = files
      .filter(file => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
      .map(file => {
        // Create a readable title from filename (e.g., "shymkent-zoo.jpg" -> "Shymkent Zoo")
        const title = file
          .replace(/\.(jpg|jpeg|png|webp|avif)$/i, '')
          .split(/[-_]/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')

        return `- ${title}: /assets/images/${file}`
      })
  } catch (e) {
    console.error('Error reading images directory:', e)
    // Fallback to destinations data if file system access fails
    allImages = destinations.map((d: any) => `- ${d.title}: ${d.image}`)
  }

  // Prepare available images context
  const availableImages = allImages.join('\n')

  // Construct the prompt based on user preferences
  const prompt = `You are a travel expert specializing in Shymkent, Turkestan and Turkestan Region, Kazakhstan. Create a detailed, and personalized travel itinerary based on the following preferences:

**Season:** ${season}
**Interests:** ${preferences.join(', ')}
**Budget:** ${budget}
**Travel Style:** ${travelStyle}

**Available Visuals:**
The following real images are available for specific locations. When you recommend or mention these places, YOU MUST include the corresponding image using standard Markdown syntax: \`![Alt Text](Image URL)\`.
${availableImages}

Please create a comprehensive itinerary that includes:

1. **Welcome & Overview** - A captivating introduction to what makes this journey special
2. **Day-by-Day Itinerary** - Detailed daily plans (suggest 3-5 days). **CRITICAL: Insert relevant images from the "Available Visuals" list for each day/location.**
3. **Must-Visit Attractions** - Key locations in both Shymkent and Turkestan
4. **Local Cuisine Recommendations** - Authentic dining experiences
5. **Cultural Insights** - Important customs and traditions
6. **Practical Tips** - Transportation, best times to visit, what to pack
7. **Hidden Gems** - Lesser-known spots that match their interests

Format your response in beautiful, well-structured Markdown. Use headers (##, ###), lists, bold text, and emojis where appropriate to make it engaging and easy to read. Be specific with place names, timings, and prices when relevant.

Make this feel like a premium for tourists, sophisticated, and tailored specifically to their preferences. Write in a warm, engaging tone that inspires excitement about the journey. Ensure images are placed contextually right after the location is described.`

  try {
    // Use GPT-4 (gpt-5.1 doesn't exist yet, using the latest available model)
    const stream = await openai.chat.completions.create({
      model: 'gpt-5.1',
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
      max_tokens: 10000,
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
