<template>
    <header class="sticky border-b border-zinc-800 top-0 flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-2 bg-zinc-900">
        <nav class="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
            <div class="lg:col-span-3 flex items-center">
            <BlurAnimate>
                <NuxtLink class="flex questrial text-white hover:text-zinc-300 transition rounded-xl text-xl font-semibold focus:outline-hidden focus:opacity-80" to="/" aria-label="Logo">
                    <span class="my-auto transition">TabAI</span>
                </NuxtLink>
            </BlurAnimate>
            <div class="ms-1 sm:ms-2">
            </div>
            </div>

            <div class="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
            <BlurAnimate>
                <button type="button" class="py-1.5 text-white px-6 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-teal-400 transition hover:bg-teal-500 focus:outline-hidden focus:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none">
                    Sign in
                </button>
            </BlurAnimate>

            <BlurAnimate>
            <div class="lg:hidden">
                <button type="button" class="hs-collapse-toggle size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-zinc-700 text-white focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-hcail-collapse" aria-expanded="false" aria-controls="hs-pro-hcail" aria-label="Toggle navigation" data-hs-collapse="#hs-pro-hcail">
                <svg class="hs-collapse-open:hidden shrink-0 text-white size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg class="hs-collapse-open:block hidden text-white shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
            </BlurAnimate>
            </div>

            <div id="hs-pro-hcail" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6" aria-labelledby="hs-pro-hcail-collapse">
            <div class="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0 last:mb-4 sm:last:mb-0">
                <BlurAnimate :delay="0.2">
                <NuxtLink class="inline-block transition text-white hover:text-teal-300 focus:outline-hidden focus:text-teal-600" to="/">Home</NuxtLink>
                </BlurAnimate>
                <BlurAnimate :delay="0.4">
                <NuxtLink class="inline-block transition text-white hover:text-teal-300 focus:outline-hidden focus:text-teal-600" to="/pricing">Pricing</NuxtLink>
                </BlurAnimate>
                <BlurAnimate :delay="0.6">
                <NuxtLink class="inline-block transition text-white hover:text-teal-300 focus:outline-hidden focus:text-teal-600" to="/early">Apply for Beta</NuxtLink>
                </BlurAnimate>
            </div>
            </div>
        </nav>
    </header>
</template>