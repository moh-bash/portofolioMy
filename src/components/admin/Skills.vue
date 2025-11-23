<template>
  <div class="space-y-6">

    <!-- Title -->
    <h2 class="text-2xl font-bold">Skills Manager</h2>

    <!-- Add Skill Form -->
    <form @submit.prevent="addSkill" class="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-4">

      <input
        v-model="newSkill.title"
        type="text"
        placeholder="Skill Name"
        class="w-full p-2 border rounded"
      />

      <input
        v-model.number="newSkill.level"
        type="number"
        min="1"
        max="100"
        placeholder="Level (1-100)"
        class="w-full p-2 border rounded"
      />

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Skill
      </button>
    </form>

    <!-- Skills Table -->
    <div class="bg-white dark:bg-gray-800 shadow rounded p-4">
      <h3 class="text-xl font-semibold mb-4">Skills List</h3>

      <div v-if="loading">Loading...</div>

      <table v-else class="w-full text-left">
        <thead>
          <tr class="bg-gray-200">
            <th class="p-2">Skill</th>
            <th class="p-2">Level</th>
            <th class="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="skill in skills"
            :key="skill.id"
            class="border-b"
          >
            <td class="p-2 text-gray-800 dark:text-white">{{ skill.name }}</td>
            <td class="p-2">{{ skill.level }}%</td>

            <td class="p-2 space-x-2">
              <button
                @click="removeSkill(skill.id)"
                class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { supabase } from "@/supabase"

// State
const skills = ref([])
const loading = ref(false)

const newSkill = ref({
  title: "",
  level: null
})

// Fetch Skills
async function loadSkills() {
  loading.value = true

  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .order("id", { ascending: true })

  if (!error) {
    skills.value = data
  }

  loading.value = false
}

// Add Skill
async function addSkill() {
  if (!newSkill.value.title || !newSkill.value.level) return

  const { error } = await supabase
    .from("skills")
    .insert([newSkill.value])

  if (!error) {
    newSkill.value = { title: "", level: null }
    loadSkills()
  }
}

// Delete Skill
async function removeSkill(id) {
  const { error } = await supabase
    .from("skills")
    .delete()
    .eq("id", id)

  if (!error) {
    skills.value = skills.value.filter(item => item.id !== id)
  }
}

onMounted(() => {
  loadSkills()
})
</script>
