<template>
  <section id="hero" class="py-20 bg-gray-50 dark:bg-gray-900 mx-auto flex items-center justify-center px-7 md:px-15 h-full min-h-full">
    <div class=" mx-auto grid md:grid-cols-2 gap- items-center">
      <div class="space-y-6">
        <h2 class="text-3xl md:text-4xl font-semibold dark:text-gray-300 ">
          {{ $t('hero.hello') }}
        </h2>

        <h1 class="text-2xl rtl:leading-normal md:text-6xl font-bold">
          {{ $t('hero.name') }} <span class="text-emerald-500 ">{{ $t('hero.role') }}</span>
        </h1>

        <p class="dark:text-gray-400 text-lg  leading-relaxed">
          {{ $t('hero.description') }}
        </p>

        <div class="flex space-x-4 md:pt-3">
          <button
            @click="emit('goToProjects')"
            class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl shadow-md duration-200 cursor-pointer"
          >
            {{ $t('hero.view_projects') }}
          </button>
          <div class="flex space-x-4 items-end dark:text-gray-300">
            <a href="https://github.com/moh-bash" target="_blank">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
              </svg>
            </a>
            <a href="http://www.linkedin.com/in/mohamad-bashir" target="_blank">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
              </svg>
            </a>
            <a href="https://t.me/Mhd_Bash" target="_blank">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="flex justify-center md:justify-end mt-4 md:mt-0">
        <img
          src="../assets/1757754758651.jpg"
          :alt="$t('hero.name')"
          class="w-80 md:w-85 h-auto rounded-full border-4 border-emerald-500 shadow-lg shadow-emerald-700/50"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
const emit = defineEmits(['goToProjects']);
</script>
