export default defineEventHandler((event) => {
    // Mock response for Shymkent
    return {
        temperature: 25,
        condition: 'Sunny',
        wind: 12,
        risk_score: 10
    }
})
