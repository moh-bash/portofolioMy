<template>
  <section id="projects" class="py-24 px-6 bg-gray-800">
    <div class="max-w-6xl mx-auto">

      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span class="text-blue-500">Projects</span>
      </h2>

      <!-- Loading -->
      <p v-if="loading" class="text-center text-gray-400">Loading projects...</p>

      <!-- Projects Grid -->
      <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-gray-900 rounded-xl shadow-md overflow-hidden hover:scale-105 duration-300"
        >
          <img 
            :src="project.image" 
            alt="Project Image" 
            class="w-full h-40 object-cover"
          />

          <div class="p-5 space-y-3">
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <p class="text-gray-400 text-sm">
              {{ project.description }}
            </p>

            <a
              v-if="project.project_url"
              :href="project.project_url"
              target="_blank"
              class="inline-block text-blue-400 hover:text-blue-500"
            >
              View Project →
            </a>
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
