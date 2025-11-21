import OpenAI from 'openai'
import destinations from '../../app/data/destinations.json'
import imagesData from '../../app/data/images.json'

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

  // Use statically generated image list (works on Vercel)
  const availableImages = imagesData.map((img: { title: string, path: string }) => `- ${img.title}: ${img.path} `).join('\n')

  // Construct the prompt based on user preferences
  const prompt = `You are a helpful travel expert specializing in Shymkent, Turkestan and Turkestan Region, Kazakhstan.Create a detailed, and personalized travel itinerary based on the following preferences:

** Season:** ${season}
** Interests:** ${preferences.join(', ')}
** Budget:** ${budget}
** Travel Style:** ${travelStyle}

** Available Visuals:**
  The following real images are available for specific locations.When you recommend or mention these places, YOU MUST include the corresponding image using standard Markdown syntax: \`![Alt Text](Image URL)\`.
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

Make this feel like a premium for tourists, sophisticated, and tailored specifically to their preferences. Write in a warm, engaging tone that inspires excitement about the journey. Ensure images are placed contextually right after the location is described.

Developer Notes:
- Do not include Nauryz Park near the Mega planet mall.
- DoubleTree by Hilton in Shymkent, Kazakhstan Location: Situated near Abay Park, a short distance from the city center and the airport. Amenities: Offers an indoor pool, fitness center, on-site restaurant, bar, and free Wi-Fi. Business facilities: Provides conference rooms for meetings and events. Family-friendly: Features a special Family Experience program for children under 12.  Цена примерно 40000 тенге за ночь
- Megapolis Hotel Shymkent – это комфортабельный 4-звездочный отель, где соотношение цены и качества превзойдет  все Ваши ожидания. В отеле имеется 35 номеров категории «Делюкс», 2 номера категории «Улучшенный Делюкс», 4 номера  категории «Люкс»; 2 конференц-зала «Астана» и «Алмата» , фитнес-центр, ресторан, круглосуточная стойка регистрации. Осуществляется доставка еды и напитков в номер 24/7. Цена делюкс примерно 35000 тенге за ночь
- Rixos Khadisha Shymkent -  Цена примерно 140000 тенге за ночь (за человека, solo).

Generate helpful but not so big route.
`

  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-5.1',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful travel expert for Shymkent and Turkestan, Kazakhstan. You create beautiful, detailed, and personalized travel itineraries with proper markdown formatting.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.8,
      max_completion_tokens: 100000,
      stream: true
    })

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
