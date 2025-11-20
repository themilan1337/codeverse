<template>
  <footer class="bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6">
        <div class="col-span-2 md:col-span-2">
          <div class="flex items-center">
            <span class="ml-0 sm:ml-4 my-auto text-xl sm:text-2xl questrial text-zinc-200">
            </span>
          </div>
        </div>

        <div class="space-y-4">
          <nav aria-labelledby="footer-heading-0">
            <h2
              class="text-base font-semibold text-zinc-900 questrial dark:text-white"
              id="footer-heading-0"
            >
              Company
            </h2>
            <ul class="mt-4 space-y-2">
              <li>
                <NuxtLink
                  to="/about"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  Apply for Beta
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/mission"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  Mission
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/team"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  About
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/history"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  Blog
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Services Section -->
        <div class="space-y-4">
          <nav aria-labelledby="footer-heading-1">
            <h2
              class="text-base font-semibold text-zinc-900 questrial dark:text-white"
              id="footer-heading-1"
            >
              Services
            </h2>
            <ul class="mt-4 space-y-2">
              <li>
                <NuxtLink
                  to="/marketing"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  Chrome Extension
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/marketing"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  Mobile App
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Resources Section -->
        <div class="space-y-4">
          <nav aria-labelledby="footer-heading-2">
            <h2
              class="text-base font-semibold text-zinc-900 questrial dark:text-white"
              id="footer-heading-2"
            >
              Privacy
            </h2>
            <ul class="mt-4 space-y-2">
              <li>
                <NuxtLink
                  to="/docs"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/guides"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  Refund Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/webinars"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  Terms of Use
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Support & Legal Section -->
        <div class="space-y-4">
          <nav aria-labelledby="footer-heading-3">
            <h2
              class="text-base font-semibold text-zinc-900 questrial dark:text-white"
              id="footer-heading-3"
            >
              Support &amp; Legal
            </h2>
            <ul class="mt-4 space-y-2">
              <li>
                <NuxtLink
                  to="/pricing"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  Email Support
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/support"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  Live Chat
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-300"
                >
                  Pricing
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        class="flex flex-col justify-between pt-12 mt-12 border-t gap-8 sm:flex-row sm:items-center border-zinc-200 dark:border-zinc-800"
      >
        <h2 class="text-sm font-medium text-zinc-400 dark:text-zinc-500">
          Copyright © {{ new Date().getFullYear() }} TabAI. All rights reserved.
        </h2>
        <nav
          aria-labelledby="social-icons-heading"
          role="navigation"
          class="flex items-center gap-4 text-zinc-500"
        >
          <p class="text-base sr-only" id="social-icons-heading">
            Follow us on social media
          </p>
          <NuxtLink
            class="text-base transition font-medium hover:text-teal-500 text-zinc-500 dark:text-zinc-400 dark:hover:text-teal-400"
            to="#_"
          >
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"/><path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193"/></g></svg>
          </NuxtLink>
          <NuxtLink
            class="text-base transition font-medium hover:text-teal-500 text-zinc-500 dark:text-zinc-400 dark:hover:text-teal-400"
            to="#_"
          >
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><g fill="none" stroke="currentColor" stroke-linejoin="round"><path stroke-linecap="round" stroke-width="1.5" d="M7 10v7m4-4v4m0-4a3 3 0 1 1 6 0v4m-6-4v-3"/><path stroke-linecap="round" stroke-width="2" d="M7.008 7h-.009"/><path stroke-width="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"/></g></svg>
          </NuxtLink>
          <NuxtLink
            class="text-base transition font-medium hover:text-teal-500 text-zinc-500 dark:text-zinc-400 dark:hover:text-teal-400"
            to="#_"
          >
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><g fill="none" stroke="currentColor"><path stroke-linejoin="round" stroke-width="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"/><path stroke-width="1.5" d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.508 6.5h-.01"/></g></svg>
          </NuxtLink>
          <NuxtLink
            class="text-base transition font-medium hover:text-teal-500 text-zinc-500 dark:text-zinc-400 dark:hover:text-teal-400"
            to="#_"
          >
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"/><path stroke-linecap="round" d="M10.536 11.008c-.82-.116-2.69.075-3.606 1.77s.007 3.459.584 4.129c.569.627 2.378 1.814 4.297.655c.476-.287 1.069-.502 1.741-2.747l-.078-8.834c-.13.973.945 3.255 4.004 3.525"/></g></svg>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>