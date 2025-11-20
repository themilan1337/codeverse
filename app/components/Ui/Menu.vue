<template>
  <nav class="menu-nav">
    <div class="menu-overlay" :class="{ active: isMenuOpen }">
      <!-- Close Button -->
      <div class="menu-close-btn" @click="closeMenu">
        <div class="menu-close-icon">
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div class="menu-overlay-content">
        <div class="menu-media-wrapper">
          <NuxtImg 
            src="https://static.tildacdn.pro/tild6262-3861-4461-b164-616139663664/photo_2023-05-24_17-.jpg" 
            alt="Menu background" 
            loading="lazy"
            decoding="async"
            :placeholder="[50, 25, 75, 5]"
          />
        </div>
        <div class="menu-content-wrapper">
          <div class="menu-content-main">
            <div class="menu-col">
              <div class="menu-link hover:underline"><NuxtLink to="/" @click="closeMenu">Home</NuxtLink></div>
              <div class="menu-link hover:underline"><NuxtLink to="/history" @click="closeMenu">History</NuxtLink></div>
              <div class="menu-link hover:underline"><NuxtLink to="/visa" @click="closeMenu">Visa & Entry</NuxtLink></div>
              <div class="menu-link hover:underline"><NuxtLink to="/attractions" @click="closeMenu">Attractions</NuxtLink></div>
              <div class="menu-link hover:underline"><NuxtLink to="/summary" @click="closeMenu">City Pulse</NuxtLink></div>
              <div class="menu-link hover:underline"><NuxtLink to="/team" @click="closeMenu">Team</NuxtLink></div>
              <div class="menu-link hover:underline"><NuxtLink to="/contact" @click="closeMenu">Contact</NuxtLink></div>
            </div>

            <div class="menu-col">
              <div class="menu-tag hover:underline"><NuxtLink to="/journey" @click="closeMenu">Start Journey -></NuxtLink></div>
            </div>
          </div>
          <div class="menu-footer">
            <div class="menu-col ">
              <p>Turkestan Region, Kazakhstan</p>
            </div>
            <div class="menu-col">
              <p class="!font-mono">42.3205° N, 69.5876° E</p>
              <p>shymkentvisit@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'

let SplitText

const isMenuOpen = ref(false)
const isAnimating = ref(false)
let splitTextByContainer = []
let menuOverlay = null
let menuOverlayContainer = null
let menuMediaWrapper = null

// Dynamically import SplitText
if (process.client) {
  import('gsap/SplitText').then((module) => {
    SplitText = module.SplitText
    gsap.registerPlugin(SplitText)
  })
}

const toggleMenu = () => {
  if (isAnimating.value) return

  if (!isMenuOpen.value) {
    openMenu()
  } else {
    closeMenu()
  }
}

const openMenu = () => {
  isAnimating.value = true
  isMenuOpen.value = true

  const tl = gsap.timeline()

  tl.to(menuOverlay, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1,
    ease: "power4.inOut",
  }, "<")
  .to(menuOverlayContainer, {
    yPercent: 0,
    duration: 1,
    ease: "power4.inOut",
  }, "<")
  .to(menuMediaWrapper, {
    opacity: 1,
    duration: 0.75,
    ease: "power2.out",
    delay: 0.5,
  }, "<")

  if (splitTextByContainer.length > 0) {
    splitTextByContainer.forEach((containerSplits) => {
      const copyLines = containerSplits.flatMap((split) => split.lines)
      tl.to(copyLines, {
        y: "0%",
        duration: 2,
        ease: "power4.inOut",
        stagger: -0.075,
      }, -0.15)
    })
  }

  tl.call(() => {
    isAnimating.value = false
  })
}

const closeMenu = () => {
  isAnimating.value = true
  isMenuOpen.value = false

  const tl = gsap.timeline()

  tl.to(menuOverlay, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    duration: 1,
    ease: "power4.inOut",
  })
  .to(menuOverlayContainer, {
    yPercent: -50,
    duration: 1,
    ease: "power4.inOut",
  }, "<")

  tl.call(() => {
    if (splitTextByContainer.length > 0) {
      splitTextByContainer.forEach((containerSplits) => {
        const copyLines = containerSplits.flatMap((split) => split.lines)
        gsap.set(copyLines, { y: "-110%" })
      })
    }

    gsap.set(menuMediaWrapper, { opacity: 0 })
    isAnimating.value = false
  })
}

const initializeSplitText = async () => {
  if (process.client && !SplitText) {
    const module = await import('gsap/SplitText')
    SplitText = module.SplitText
    gsap.registerPlugin(SplitText)
  }

  if (SplitText) {
    const textContainers = document.querySelectorAll('.menu-col')
    splitTextByContainer = []

    textContainers.forEach((container) => {
      const textElements = container.querySelectorAll('a, p')
      let containerSplits = []

      textElements.forEach((element) => {
        const split = SplitText.create(element, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'line',
        })
        containerSplits.push(split)
        gsap.set(split.lines, { y: '-110%' })
      })

      splitTextByContainer.push(containerSplits)
    })
  }
}

onMounted(async () => {
  await nextTick()
  
  menuOverlay = document.querySelector('.menu-overlay')
  menuOverlayContainer = document.querySelector('.menu-overlay-content')
  menuMediaWrapper = document.querySelector('.menu-media-wrapper')

  await initializeSplitText()
})

onUnmounted(() => {
  if (splitTextByContainer.length > 0) {
    splitTextByContainer.forEach((containerSplits) => {
      containerSplits.forEach((split) => {
        if (split.revert) split.revert()
      })
    })
  }
})

// Watch for route changes to close menu
const route = useRoute()
watch(() => route.fullPath, () => {
  if (isMenuOpen.value) {
    closeMenu()
  }
})

// Expose toggleMenu so it can be called from parent components
defineExpose({
  toggleMenu
})
</script>

<style scoped>
.menu-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 99999;
}

.menu-close-btn {
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  pointer-events: all;
  z-index: 100001;
  cursor: pointer;
}

.menu-close-icon {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  border-radius: 100%;
  transition: all 0.3s ease;
}

.menu-close-icon:hover {
  background-color: #f3f4f6;
  transform: rotate(90deg);
}

.menu-close-icon span {
  position: absolute;
  width: 15px;
  height: 1.25px;
  background-color: #333;
  transition: all 0.3s ease;
}

.menu-close-icon span:nth-child(1) {
  transform: rotate(45deg);
}

.menu-close-icon span:nth-child(2) {
  transform: rotate(-45deg);
}

.menu-overlay,
.menu-overlay-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: #333;
  overflow: hidden;
  z-index: 100000;
}

.menu-overlay {
  background-color: white;
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  will-change: clip-path;
}

.menu-overlay-content {
  display: flex;
  transform: translateY(-50%);
  will-change: transform;
  pointer-events: all;
}

.menu-media-wrapper {
  flex: 2;
  opacity: 0;
  will-change: opacity;
}

.menu-media-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-content-wrapper {
  flex: 3;
  position: relative;
  display: flex;
}

.menu-content-main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.menu-footer {
  margin: 0 auto;
}

.menu-content-main,
.menu-footer {
  width: 75%;
  padding: 2rem;
  display: flex;
  align-items: flex-end;
  gap: 2rem;
}

.menu-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.menu-col:nth-child(1) {
  flex: 3;
}

.menu-col:nth-child(2) {
  flex: 2;
}

.menu-link a {
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 1.2;
  text-decoration: none;
  color: #333;
  font-family: 'Epilogue', sans-serif;
}

.menu-tag a {
  color: #5f5f5f;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
}

.menu-footer p {
  color: #5f5f5f;
  font-size: 0.95rem;
  font-weight: 500;
}

.line {
  position: relative;
  will-change: transform;
}

@media (max-width: 1000px) {
  .menu-media-wrapper {
    display: none;
  }

  .menu-content-main,
  .menu-footer {
    width: 100%;
  }

  .menu-content-main {
    top: 50%;
    flex-direction: column;
    align-items: flex-start;
    gap: 5rem;
  }

  .menu-link a {
    font-size: 3rem;
  }

  .menu-tag a {
    font-size: 1.25rem;
  }

  .menu-close-btn {
    padding: 1rem;
  }
}

@media (max-width: 768px) {
  .menu-close-btn {
    top: 1rem;
    right: 1rem;
    padding: 0;
  }

  .menu-close-icon {
    width: 2.5rem;
    height: 2.5rem;
  }

  .menu-link a {
    font-size: 2.5rem;
  }
}
</style>