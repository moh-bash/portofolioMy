<template>
  <div class="min-h-screen w-full flex">

    <!-- Sidebar -->
    <aside
      class="w-64 p-5 border-r bg-gray-100 dark:bg-gray-900 
             border-gray-200 dark:border-gray-700 transition-colors"
    >
      <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Dashboard
      </h2>

      <nav class="flex flex-col space-y-2">
        <router-link
          to="/admin/projects"
          class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200
                 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          Projects
        </router-link>

        <router-link
          to="/admin/skills"
          class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200
                 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          Skills
        </router-link>

        <router-link
          to="/admin/messages"
          class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200
                 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          Messages
        </router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <router-view />
    </main>

  </div>
</template>

<script setup>

</script>
