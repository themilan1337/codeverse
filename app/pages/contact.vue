<template>
  <div class="min-h-screen bg-stone-50 pb-24">
    <UiTopNav />

    <!-- Hero Section -->
    <div class="relative h-[60vh] w-full overflow-hidden">
      <NuxtImg
        src="/assets/images/shymkent_city.jpg"
        alt="Contact Us"
        class="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        :placeholder="[50, 25, 75, 5]"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white px-6">
          <h1 class="text-6xl md:text-9xl font-bold tracking-tighter mb-6">Contact</h1>
          <p class="text-xl md:text-3xl font-light max-w-2xl mx-auto">
            We'd love to hear from you
          </p>
        </div>
      </div>
    </div>

    <main class="max-w-[1200px] mx-auto px-6 md:px-12 -mt-20 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Contact Info -->
        <div class="bg-black text-white p-8 md:p-16 rounded-[2.5rem] h-full flex flex-col justify-between">
          <div>
            <h2 class="text-3xl md:text-5xl font-bold mb-8">Get in touch</h2>
            <p class="text-gray-400 text-lg mb-12 leading-relaxed">
              Have questions about your trip to Shymkent? Want to collaborate? 
              Or just want to say hello? We are here for you.
            </p>
            
            <div class="space-y-8">
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 rounded-full bg-accent-red/20 flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Email</h3>
                  <p class="text-gray-400">hello@visitshymkent.kz</p>
                </div>
              </div>
              
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 rounded-full bg-accent-red/20 flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Phone</h3>
                  <p class="text-gray-400">+7 (7252) 55-55-55</p>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div class="w-12 h-12 rounded-full bg-accent-red/20 flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Visit Us</h3>
                  <p class="text-gray-400">ShymkentHub, Shymkent, Kazakhstan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 pt-12 border-t border-gray-800">
             <div class="flex gap-4">
                <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent-red transition-colors">
                  <span class="sr-only">Instagram</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
             </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl">
          <h3 class="text-3xl font-bold mb-8 text-text-main">Send a message</h3>
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" class="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-accent-red focus:ring-0 transition-all" placeholder="John" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" class="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-accent-red focus:ring-0 transition-all" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" class="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-accent-red focus:ring-0 transition-all" placeholder="john@example.com" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows="4" class="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-accent-red focus:ring-0 transition-all" placeholder="How can we help you?"></textarea>
            </div>

            <button type="button" class="w-full py-5 bg-accent-red text-white rounded-2xl font-bold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-red-600/30">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
// No special script needed
</script>
