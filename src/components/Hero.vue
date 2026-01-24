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
        </div>
      </div>

      <div class="flex justify-center md:justify-end mt-3 md:mt-0">
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
