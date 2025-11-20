import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        selectedTourId: null as number | null,
        safetyScore: 85,
        userLocation: null as [number, number] | null,
        alerts: [] as any[]
    }),
    actions: {
        setTour(id: number) {
            this.selectedTourId = id
        },
        updateSafetyScore(score: number) {
            this.safetyScore = score
        }
    }
})
