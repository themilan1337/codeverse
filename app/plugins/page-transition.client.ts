export default defineNuxtPlugin(() => {
  if (!process.client) return

  const router = useRouter()
  let isNavigating = false

  // Handle link clicks with custom transition
  const handleLinkClick = async (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const link = target.closest('a')

    if (!link) return

    const href = link.getAttribute('href') || link.getAttribute('to')

    // Skip if not internal navigation or already transitioning
    if (!href ||
        href.startsWith('#') ||
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        link.target === '_blank' ||
        isNavigating) {
      return
    }

    // Only handle internal links
    if (href.startsWith('/')) {
      e.preventDefault()
      e.stopPropagation()

      isNavigating = true

      try {
        const { animateTransition, revealTransition } = usePageTransition()

        // Play closing animation
        await animateTransition()

        // Navigate to new page
        await router.push(href)

        // Wait for next tick to ensure new page is mounted
        await new Promise(resolve => setTimeout(resolve, 50))

        // Play reveal animation
        await revealTransition()
      } catch (error) {
        console.error('Navigation error:', error)
      } finally {
        isNavigating = false
      }
    }
  }

  // Add click listener after DOM is ready
  if (typeof window !== 'undefined') {
    window.addEventListener('click', handleLinkClick, true)
  }
})
