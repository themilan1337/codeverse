export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.server || to.path === from.path) return

    const { animateTransition, revealTransition } = usePageTransition()
    const nuxtApp = useNuxtApp()

    // Animate in (cover screen)
    await animateTransition()

    // Hook into page finish to animate out (reveal)
    nuxtApp.hook('page:finish', () => {
        // Small delay to ensure DOM updates
        setTimeout(() => {
            revealTransition()
        }, 50)
    })
})
