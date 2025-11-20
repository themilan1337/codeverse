export const useSafetyScore = () => {
    const score = ref(85)
    const details = ref({ weather: 0, crowd: 0, incidents: 0 })

    async function calculateScore(lat: number, lon: number) {
        // Mock calculation logic
        // In a real app, this would fetch data from the server

        // 1. Weather Risk (0-100)
        const weatherRisk = Math.floor(Math.random() * 20) // Low risk usually

        // 2. Crowd Density (0-100)
        const crowdDensity = Math.floor(Math.random() * 40) + 10 // Moderate crowd

        // 3. Incidents (0-100)
        const incidentSeverity = 0 // No major incidents

        // Formula
        // safety = 100 - (0.4 * weather + 0.35 * crowd + 0.25 * incidents)
        const penalty = (0.4 * weatherRisk) + (0.35 * crowdDensity) + (0.25 * incidentSeverity)
        const finalScore = Math.max(0, Math.min(100, Math.round(100 - penalty)))

        score.value = finalScore
        details.value = { weather: weatherRisk, crowd: crowdDensity, incidents: incidentSeverity }

        return finalScore
    }

    return {
        score,
        details,
        calculateScore
    }
}
