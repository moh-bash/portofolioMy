<template>
  <section id="hero" class="min-h-screen flex items-center justify-center px-6 pt-20">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

      <!-- Text Section -->
      <div class="space-y-6">
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-300">
          Hello, I'm
        </h2>

        <h1 class="text-4xl md:text-6xl font-bold">
          Bashir <span class="text-blue-500">Front-End Developer</span>
        </h1>

        <p class="text-gray-400 text-lg leading-relaxed">
          I build modern websites and powerful web applications using Vue,
          Tailwind, JavaScript, and Supabase.
        </p>

        <div class="flex space-x-4 pt-4">
         

          <a href="#projects" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md duration-200">
            View Projects
          </a>
        </div>
      </div>

      <!-- Image / Illustration -->
      <div class="flex justify-center">
        <img
          src="../assets/1763902197757.png"
          alt="Developer illustration"
          class="w-96 md:w-118 drop-shadow-lg"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
</script>
