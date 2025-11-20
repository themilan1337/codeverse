export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()
    const apiKey = config.openaiApiKey

    if (!apiKey) {
        // Fallback for demo without key
        return {
            reply: "I can't connect to OpenAI right now (Missing API Key). But I recommend visiting the Yasawi Mausoleum in Turkestan and trying the plov in Shymkent!"
        }
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'system',
                        content: "You are TravelMate, an expert travel assistant specialized in South Kazakhstan (Shymkent, Turkestan). When a user asks for recommendations, always: 1) include a short 3-point itinerary, 2) include estimated time and distances, 3) include a safety score from 0 to 100 with a short explanation (mention weather, crowd, incidents), 4) list one alternative less-crowded place, 5) provide local tip about food or transport. Keep responses compact."
                    },
                    { role: 'user', content: body.prompt }
                ]
            })
        })

        const data = await response.json()
        return {
            reply: data.choices[0].message.content
        }
    } catch (error) {
        return {
            reply: "Sorry, I encountered an error processing your request."
        }
    }
})
