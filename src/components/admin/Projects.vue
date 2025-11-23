<template>
  <div class="min-h-screen w-full p-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">

    <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
      Projects Dashboard
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div 
        v-for="project in projects" 
        :key="project.id"
        class="p-5 rounded-2xl shadow-md 
               bg-white dark:bg-gray-800 
               border border-gray-200 dark:border-gray-700 
               transition-all hover:shadow-lg"
      >
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {{ project.title }}
        </h2>

        <p class="text-gray-600 dark:text-gray-300 mt-2">
          {{ project.description }}
        </p>

        <div class="mt-4 flex items-center justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {{ project.created_at }}
          </span>

          <button
            class="px-3 py-1 rounded-lg 
                   bg-blue-600 text-white 
                   hover:bg-blue-700 
                   dark:bg-blue-500 dark:hover:bg-blue-600
                   transition-colors"
          >
            Edit
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase.js'

const projects = ref([])

onMounted(async () => {
  const { data, error } = await supabase.from('projects').select('*')
  if (!error) projects.value = data
})
</script>
