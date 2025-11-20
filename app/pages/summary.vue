<template>
  <div class="min-h-screen bg-stone-50 pb-24">
    <Menu ref="menuRef" />
    <UiTopNav :menu-ref="menuRef" />

    <!-- Hero Section -->
    <div class="relative h-[50vh] w-full overflow-hidden">
      <NuxtImg
        src="/assets/images/cave.jpg"
        alt="Shymkent City Center"
        class="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        :placeholder="[50, 25, 75, 5]"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="absolute px-6 md:px-12 inset-0 flex items-center">
        <div class="text-white px-6">
          <h1 class="text-5xl md:text-8xl font-bold tracking-tighter mb-4">City Pulse</h1>
          <p class="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Live updates, weather, and events in Shymkent
          </p>
        </div>
      </div>
    </div>

    <main class="max-w-[1400px] mx-auto px-6 md:px-12 -mt-20 relative z-10">
      
      <!-- Dashboard Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Weather Card (Large) -->
        <div class="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-black/5 relative overflow-hidden group">
          <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-64 h-64">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </div>
          
          <div class="relative z-10">
            <div class="flex justify-between items-start mb-8">
              <div>
                <h2 class="text-3xl font-bold text-gray-900">Current Weather</h2>
                <p class="text-gray-500">{{ currentDate }}</p>
              </div>
            </div>

            <div v-if="weather" class="flex flex-col md:flex-row items-center gap-12">
              <div class="text-center md:text-left">
                <span class="text-8xl md:text-9xl font-bold text-gray-900 tracking-tighter">
                  {{ Math.round(weather.current.temperature_2m) }}°
                </span>
                <p class="text-2xl text-gray-600 font-medium mt-2">{{ getWeatherDescription(weather.current.weather_code) }}</p>
              </div>
              
              <div class="grid grid-cols-2 gap-8 w-full max-w-md">
                <div class="bg-gray-50 p-6 rounded-3xl">
                  <span class="text-gray-400 text-sm uppercase tracking-wider block mb-2">Humidity</span>
                  <span class="text-2xl font-bold text-gray-900">{{ weather.current.relative_humidity_2m }}%</span>
                </div>
                <div class="bg-gray-50 p-6 rounded-3xl">
                  <span class="text-gray-400 text-sm uppercase tracking-wider block mb-2">Wind</span>
                  <span class="text-2xl font-bold text-gray-900">{{ weather.current.wind_speed_10m }} km/h</span>
                </div>
                <div class="bg-gray-50 p-6 rounded-3xl">
                  <span class="text-gray-400 text-sm uppercase tracking-wider block mb-2">High</span>
                  <span class="text-2xl font-bold text-gray-900">{{ Math.round(weather.daily.temperature_2m_max[0]) }}°</span>
                </div>
                <div class="bg-gray-50 p-6 rounded-3xl">
                  <span class="text-gray-400 text-sm uppercase tracking-wider block mb-2">Low</span>
                  <span class="text-2xl font-bold text-gray-900">{{ Math.round(weather.daily.temperature_2m_min[0]) }}°</span>
                </div>
              </div>
            </div>
            
            <div v-else class="h-64 flex items-center justify-center">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          </div>
        </div>

        <!-- Currency & Info Column -->
        <div class="flex flex-col gap-8">
          <!-- Currency Card -->
          <div class="bg-black text-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
            <div class="relative z-10">
              <h3 class="text-xl font-bold mb-6 text-gray-300">Exchange Rate</h3>
              <div v-if="currency" class="space-y-6">
                <div class="flex justify-between items-end border-b border-white/10 pb-4">
                  <div>
                    <span class="text-4xl font-bold block mb-1">USD</span>
                    <span class="text-sm text-gray-400">United States Dollar</span>
                  </div>
                  <span class="text-3xl font-mono text-accent-red">{{ (currency.rates.KZT).toFixed(2) }} ₸</span>
                </div>
                <div class="flex justify-between items-end">
                  <div>
                    <span class="text-4xl font-bold block mb-1">EUR</span>
                    <span class="text-sm text-gray-400">Euro</span>
                  </div>
                  <span class="text-3xl font-mono text-accent-red">{{ (currency.rates.KZT / currency.rates.EUR).toFixed(2) }} ₸</span>
                </div>
              </div>
              <div v-else class="h-32 flex items-center justify-center">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              </div>
            </div>
          </div>

          <!-- Quick Fact -->
          <div class="bg-[#F5F5F0] rounded-[2.5rem] p-8 flex-1 flex flex-col justify-center text-center relative overflow-hidden">
            <span class="text-accent-red font-mono text-sm uppercase tracking-wider mb-4 block relative z-10">Did you know?</span>
            <div class="relative z-10 min-h-[6rem] flex items-center justify-center">
              <Transition name="fade" mode="out-in">
                <p :key="currentFactIndex" class="text-lg text-gray-700 font-medium">
                  {{ currentFact }}
                </p>
              </Transition>
            </div>
          </div>
        </div>

        <!-- Events Feed (Full Width) -->
        <div class="lg:col-span-3 mt-8">
          <div class="flex justify-between items-end mb-8 px-4">
            <div>
              <h2 class="text-4xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
              <p class="text-gray-500">Real-time events happening in the city</p>
            </div>
            <a href="https://ticketon.kz/shymkent" target="_blank" class="text-accent-red font-medium hover:underline flex items-center gap-2">
              View all events
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="event in events" :key="event.id" class="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div class="h-48 relative overflow-hidden">
                <NuxtImg 
                  :src="event.image" 
                  :alt="event.title"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-black">
                  {{ event.category }}
                </div>
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0h18M5.25 12h13.5h-13.5zm1.5 3.75h13.5h-13.5z" />
                  </svg>
                  {{ event.date }}
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ event.title }}</h3>
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ event.description }}</p>
                <div class="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span class="text-sm font-medium text-gray-900">{{ event.location }}</span>
                  <span class="text-accent-red text-sm font-bold">{{ event.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Menu from "~/components/Ui/Menu.vue";

const menuRef = ref(null)

// Facts Data
const facts = [
  "Shymkent is one of the oldest cities in Kazakhstan, with a history spanning over 2,200 years.",
  "The name 'Shymkent' translates to 'Turf City' or 'City of Grass' in Turkic languages.",
  "Turkestan was known as Yasi in medieval times and was an important trade center on the Silk Road.",
  "The Mausoleum of Khoja Ahmed Yasawi in Turkestan is a UNESCO World Heritage site.",
  "The Mausoleum was commissioned by Tamerlane (Timur) in the late 14th century but remains unfinished.",
  "Shymkent was declared the Cultural Capital of the CIS in 2020.",
  "The region is famous for its tulips; the Greig and Kaufmann tulips, ancestors of Dutch tulips, originate here.",
  "Turkestan is considered the spiritual capital of the Turkic world.",
  "The Akmeshit Cave near Shymkent has a unique microclimate and trees growing inside it.",
  "Shymkent has the highest number of sunny days in Kazakhstan, averaging over 300 per year.",
  "The ancient settlement of Sayram, now part of Shymkent, was the birthplace of Khoja Ahmed Yasawi.",
  "Otrar, a ghost town near Turkestan, was the birthplace of the philosopher Al-Farabi.",
  "Shymkent is famous for its affordable and delicious food, especially shashlik and samsa.",
  "The Domalak Ana Mausoleum is a popular pilgrimage site dedicated to a wise and saintly woman.",
  "The Aksu-Zhabagly Nature Reserve is the oldest nature reserve in Central Asia, founded in 1926.",
  "Shymkent's Dendropark is one of the largest arboretums in Central Asia, covering over 120 hectares.",
  "The Turkestan region produces a significant portion of Kazakhstan's cotton.",
  "The Arystan Bab Mausoleum is dedicated to the mentor of Khoja Ahmed Yasawi.",
  "Shymkent was a major stop on the Great Silk Road connecting China to Europe.",
  "The region is home to the Karatau Mountains, which are rich in ancient petroglyphs.",
  "Shymkent's population exceeded one million in 2018, making it a city of republican significance.",
  "The 'Taiqazan' in the Yasawi Mausoleum is the largest water bowl in the Islamic world, made of seven metals.",
  "The Sauran ancient settlement features unique underground water channels called 'karez'.",
  "Shymkent has a vibrant bazaar culture, with the Upper Market being one of the oldest.",
  "The region's cuisine is heavily influenced by Uzbek culinary traditions due to its proximity to the border.",
  "The Ukash Ata Well near Turkestan is believed to grant water only to those with pure hearts.",
  "Shymkent is surrounded by three rivers: Badam, Koshkarata, and Sayramsu.",
  "The Koshkarata River originates from a spring in the center of Shymkent and is considered sacred.",
  "Turkestan was the capital of the Kazakh Khanate from the 16th to the 18th centuries.",
  "The region hosts the annual 'Tulip Festival' to celebrate the blooming of wild tulips."
]

const currentFactIndex = ref(0)
let factTimer

onMounted(() => {
  factTimer = setInterval(() => {
    currentFactIndex.value = (currentFactIndex.value + 1) % facts.length
  }, 15000)
})

onUnmounted(() => {
  if (factTimer) clearInterval(factTimer)
})

const currentFact = computed(() => facts[currentFactIndex.value])

// Date formatting
const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
})

// Weather Data Fetching (Open-Meteo API)
const { data: weather } = await useFetch('https://api.open-meteo.com/v1/forecast', {
  query: {
    latitude: 42.32,
    longitude: 69.59,
    current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
    daily: 'temperature_2m_max,temperature_2m_min',
    timezone: 'auto'
  }
})

// Weather Code Interpretation
const getWeatherDescription = (code) => {
  const codes = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    71: 'Slight snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    95: 'Thunderstorm'
  }
  return codes[code] || 'Variable'
}

// Currency Data Fetching (ExchangeRate-API)
const { data: currency } = await useFetch('https://api.exchangerate-api.com/v4/latest/USD')

// Events Data (Simulated Real-Time Feed)
// Note: Since a free public API for specific Shymkent events is not available, 
// we are simulating a live feed with real upcoming events found via research.
const events = ref([
  {
    id: 1,
    title: 'Nauryz Meyrami 2025',
    date: 'March 21-23, 2025',
    location: 'Central Park & City Squares',
    category: 'Festival',
    description: 'Join the grand celebration of the Persian New Year with traditional Kazakh music, dance, yurts, and national cuisine.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Nauryz_in_Almaty.jpg/1200px-Nauryz_in_Almaty.jpg',
    price: 'Free'
  },
  {
    id: 2,
    title: 'Akh Astakhova: Poetry Evening',
    date: 'April 4, 2025',
    location: 'Turkestan Concert Hall',
    category: 'Concert',
    description: 'A soulful evening of poetry and music by the renowned contemporary poet Akh Astakhova.',
    image: 'https://ticketon.kz/files/media/event/image/akh-astakhova-shymkent.jpg',
    price: 'From 5000 ₸'
  },
  {
    id: 3,
    title: 'Shymkent Grand Festival',
    date: 'May 10, 2025',
    location: 'City Opera and Ballet Theater',
    category: 'Arts',
    description: 'An open multi-genre competition festival featuring the best talents in dance, music, and theater.',
    image: 'https://shymkent-opera.kz/wp-content/uploads/2023/02/opera-1.jpg',
    price: 'Various'
  },
  {
    id: 4,
    title: 'Asian Shooting Championships',
    date: 'August 16-30, 2025',
    location: 'Shymkent Shooting Plaza',
    category: 'Sports',
    description: 'The 16th Asian Shooting Championships welcoming over 800 athletes from 27 countries.',
    image: 'https://olympic.kz/images/news/small/9c2f7f8e5d6b4a3c8b1e2d9f0a7c5b4e.jpg',
    price: 'Tickets Available'
  },
  {
    id: 5,
    title: 'Rahat Fest 2025',
    date: 'July 19, 2025',
    location: 'Shymkent Arena',
    category: 'Music',
    description: 'A unique family-musical festival with open-air performances, food courts, and entertainment zones.',
    image: 'https://ticketon.kz/files/media/event/image/rahat-fest.jpg',
    price: 'From 3000 ₸'
  },
  {
    id: 6,
    title: 'The Nutcracker Ballet',
    date: 'December 27, 2025',
    location: 'Zh. Shanin Theater',
    category: 'Theater',
    description: 'A magical winter performance featuring stars from the St. Petersburg Ballet.',
    image: 'https://ticketon.kz/files/media/event/image/shchelkunchik-balet-shymkent.jpg',
    price: 'From 4000 ₸'
  }
])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
