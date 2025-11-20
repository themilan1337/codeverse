import { ref } from 'vue'
import gsap from 'gsap'

const isTransitioning = ref(false)
const ease = 'power4.inOut'

export const usePageTransition = () => {
  const revealTransition = (): Promise<void> => {
    return new Promise((resolve) => {
      const blocks = document.querySelectorAll('.page-transition-block')

      if (!blocks.length) {
        resolve()
        return
      }

      gsap.set(blocks, { scaleY: 1, visibility: 'visible' })
      gsap.to(blocks, {
        scaleY: 0,
        duration: 1,
        stagger: {
          each: 0.1,
          from: 'start',
          grid: [2, 5],
          axis: 'x',
        },
        ease: ease,
        onComplete: () => {
          gsap.set(blocks, { visibility: 'hidden' })
          isTransitioning.value = false
          resolve()
        },
      })
    })
  }

  const animateTransition = (): Promise<void> => {
    return new Promise((resolve) => {
      isTransitioning.value = true
      const blocks = document.querySelectorAll('.page-transition-block')

      if (!blocks.length) {
        resolve()
        return
      }

      gsap.set(blocks, { visibility: 'visible', scaleY: 0 })
      gsap.to(blocks, {
        scaleY: 1,
        duration: 1,
        stagger: {
          each: 0.1,
          from: 'start',
          grid: [2, 5],
          axis: 'x',
        },
        ease: ease,
        onComplete: resolve,
      })
    })
  }

  return {
    isTransitioning,
    revealTransition,
    animateTransition,
  }
}
