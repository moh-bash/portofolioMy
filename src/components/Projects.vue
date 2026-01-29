<script setup>

import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { supabase } from '@/supabase'

const expanded = ref(null) // لتتبع أي مشروع مفتوح حالياً

const toggleDescription = (id) => {
  expanded.value = expanded.value === id ? null : id
}
const loading = ref(true)

const projects = ref([])

const { locale } = useI18n()



onMounted(async () => {

  const { data, error } = await supabase

    .from('projects')

    .select('*')

    .order('created_at', { ascending: false })



  if (error) {

    console.error("Supabase error:", error)

  } else {

    projects.value = data

  }
  loading.value = false
})

</script>
<template>

  <section id="projects" class=" md:py-6 py-20 px-6 bg-gray-50 dark:bg-gray-900 min-h-full">
    <div class="mx-auto">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">
        {{ $t('projects.title_1') }}<span class="text-emerald-500">{{ $t('projects.title_2') }}</span>
      </h2>
      <!-- Loading -->
      <p v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div class="mx-auto w-full max-w-sm border border-emerald-300 p-4 rounded-2xl">
        <div class="flex animate-pulse space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div class="h-45 rounded bg-gray-400"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                <div class="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div class="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto w-full max-w-sm border border-emerald-300 p-4 rounded-2xl">
        <div class="flex animate-pulse space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div class="h-45 rounded bg-gray-400"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                <div class="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div class="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto w-full max-w-sm border border-emerald-300 p-4 rounded-2xl">
        <div class="flex animate-pulse space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div class="h-45 rounded bg-gray-400"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                <div class="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div class="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
      </p>

      <!-- Projects Grid -->
      <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 gap-7 px-1">
        <div v-for="project in projects" :key="project.id"
          class="relative bg-gray-150 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-emerald-500/30 shadow-black/40 overflow-hidden hover:-translate-y-1 duration-300">
          <img :src="project.image" alt="Project Image" class="w-full md:h-40 object-cover" />
          <p class="absolute top-2 right-2 bg-black/70 bg-opacity-50 text-white px-1 py-1 rounded-md text-xs">
            {{project.created_at}}
          </p>
          <div class="p-5 space-y-3">
            <h3 class="text-lg mb-0 pb-0 font-semibold line-clamp-1">
              {{ locale === 'en' ? project.title_en : project.title_ar }}
            </h3>
            <div  @click="toggleDescription(project.id)" class="flex items-top justify-between gap-0 hover:cursor-pointer">
                <p
                  class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-all duration-300"
                  :class="expanded === project.id ? 'line-clamp-none' : 'line-clamp-1'"
                >
                  {{ locale === 'en' ? project.description_en : project.description_ar }}
                </p>
              <button class="self-start text-emerald-500 rounded-full py-0 px-0 hover:bg-emerald-500 hover:text-white hover:cursor-pointer">
                {{ expanded === project.id ? '▲' : '▼' }}
              </button>
            </div>
            <div class="flex flex-wrap gap-2 pt-0">
              <span v-for="tech1 in project.tech.split(',')" :key="tech1"
                class="px-2 py-1 text-[10px] uppercase tracking-wider font-bold
                      bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300
                      rounded-md border border-gray-200 dark:border-gray-600">
                {{ tech1.trim() }}
              </span>
            </div>
            <div class="grid grid-cols-2 gap-2.5">
              <!-- Project URL Button -->
              <a :href="project.project_url" target="_blank"
                class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg shadow-md duration-200 flex items-center justify-center">
                {{ $t('projects.view_live') }} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-5 ms-1.5 ">

                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </a>
              <!-- Code Repository Button -->
              <a :href="project.github" target="_blank"
                class="bg-black hover:bg-gray-950 text-white px-3 py-2 rounded-lg shadow-md duration-200 flex items-center justify-center">
                {{ $t('projects.view_code') }} <img src="../assets/github-142-svgrepo-com.svg" alt=""
                  class="size-5 ms-1.5 bg-white rounded-full border border-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>






