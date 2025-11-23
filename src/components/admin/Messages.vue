<template>
  <div>
    <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
      Messages
    </h1>

    <!-- Loading -->
    <div v-if="loading" class="text-gray-600 dark:text-gray-300">
      Loading messages...
    </div>

    <!-- If no messages -->
    <div v-else-if="messages.length === 0" class="text-gray-600 dark:text-gray-300">
      No messages yet.
    </div>

    <!-- Messages Table -->
    <div v-else class="overflow-x-auto dark:bg-gray-800">
      <table
        class="w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
      >
        <thead>
          <tr class="bg-gray-200 dark:bg-gray-700">
            <th class="p-3 text-left text-gray-900 dark:text-gray-100">Name</th>
            <th class="p-3 text-left text-gray-900 dark:text-gray-100">Email</th>
            <th class="p-3 text-left text-gray-900 dark:text-gray-100">Message</th>
            <th class="p-3 text-left text-gray-900 dark:text-gray-100">Date</th>
            <th class="p-3 text-left text-gray-900 dark:text-gray-100">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="msg in messages"
            :key="msg.id"
            class="border-t border-gray-300 dark:border-gray-700 
                   hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <td class="p-3 text-gray-800 dark:text-gray-200">{{ messages.name }}</td>
            <td class="p-3 text-gray-800 dark:text-gray-200">{{ msg.email }}</td>
            <td class="p-3 text-gray-800 dark:text-gray-200">{{ msg.message }}</td>
            <td class="p-3 text-gray-800 dark:text-gray-200">
              {{ formatDate(msg.created_at) }}
            </td>
            <td class="p-3">
              <button
                @click="deleteMessage(msg.id)"
                class="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded"
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
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase'

const messages = ref([])
const loading = ref(true)

// Load messages
async function loadMessages() {
  loading.value = true
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (!error) {
    messages.value = data
  }
  loading.value = false
}

// Delete message
async function deleteMessage(id) {
  if (!confirm('Are you sure you want to delete this message?')) return

  const { error } = await supabase.from('messages').delete().eq('id', id)
  if (!error) {
    messages.value = messages.value.filter(m => m.id !== id)
  }
}

// Format date
function formatDate(date) {
  return new Date(date).toLocaleString()
}

onMounted(() => loadMessages())
</script>

<style scoped>
table {
  border-collapse: collapse;
}
</style>
