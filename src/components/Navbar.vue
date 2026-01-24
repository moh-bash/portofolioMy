<template>
  <nav dir="ltr" class="fixed top-0 md:top-2 lg:top-3 left-0
               w-full md:max-w-200 md:left-1/2 md:-translate-x-1/2
              bg-gray-50 dark:bg-gray-900
                md:rounded-4xl md:px-5
                md:border-1 border-emerald-600
                shadow-md shadow-emerald-700/40
                z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

      <!-- Logo -->
      <h1 class="text-4xl font-bold  tracking-wide">
        Bashir <span class="text-emerald-500">Dev</span>
      </h1>

     <ul class="flex items-center gap-1 font-medium">
        <li>
          <button
            @click="toggleLanguage"
            class="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                   bg-emerald-600/5 text-emerald-700 hover:bg-emerald-600 hover:text-white
                   dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white
                   border-2 border-emerald-500 active:scale-90"
          >
            <span class="text-xs font-bold uppercase">
              {{ isArabic ? 'En' : 'عر' }}
            </span>
          </button>
        </li>

        <li>
          <button
            @click="toggleTheme"
            class="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                   bg-emerald-600/5 text-emerald-700 hover:bg-emerald-600 hover:text-white
                   dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white
                   border-2 border-emerald-600 active:scale-90"
          >
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const isArabic = computed(() => locale.value === 'ar')
const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en'
  locale.value = newLocale
  const dir = newLocale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.setAttribute('dir', dir)
  document.documentElement.setAttribute('lang', newLocale)
  localStorage.setItem('user-locale', newLocale)
}

const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value
  const root = document.documentElement
  if (isDark.value) {
    root.setAttribute('data-mode', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.removeAttribute('data-mode')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme !== 'light') {
    isDark.value = true
    document.documentElement.setAttribute('data-mode', 'dark')
  } else {
    isDark.value = false
    document.documentElement.removeAttribute('data-mode')
  }

  const savedLocale = localStorage.getItem('user-locale') || 'en'
  locale.value = savedLocale
  const dir = savedLocale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.setAttribute('dir', dir)
  document.documentElement.setAttribute('lang', savedLocale)
})
</script>
