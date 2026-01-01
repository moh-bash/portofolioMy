<template>
  <section id="projects" class="py-24 px-6 bg-gray-900">
    <div class="max-w-6xl mx-auto">

      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span class="text-blue-500">Projects</span>
      </h2>

      <!-- Loading -->
      <p v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div class="mx-auto w-full max-w-sm border border-blue-300 p-4 rounded-2xl">
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
        <div class="mx-auto w-full max-w-sm border border-blue-300 p-4 rounded-2xl">
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
        <div class="mx-auto w-full max-w-sm border border-blue-300 p-4 rounded-2xl">
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
      <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 duration-300"
        >
          <img 
            :src="project.image" 
            alt="Project Image" 
            class="w-full h-40 object-cover"
          />

          <div class="p-5 space-y-3">
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <div class="flex my-1">
              <p class="m-1 p-1 border border-blue-600 text-gray-400 text-sm">
                {{ project.description }}
              </p>
            </div>
            <div class="grid grid-cols-2 gap-2.5">
              <button
                v-if="project.project_url"
                :href="project.project_url"
                target="_blank"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md duration-200"
              >
                View Project →
              </button>
              <button
                v-if="project.project_url"
                :href="project.project_url"
                target="_blank"
                class="bg-black hover:bg-blue-700 text-white px-4 py- rounded-lg shadow-md duration-200"
              >
                View Project →
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase' 

const loading = ref(true)
const projects = ref([])

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
