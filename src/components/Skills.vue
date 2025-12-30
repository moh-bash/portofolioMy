<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";

const skills = ref([]);
const loading = ref(true);
const errorMessage = ref("");

const fetchSkills = async () => {
  const { data, error } = await supabase.from("skills").select("*");

  if (error) {
    errorMessage.value = 'error';
    console.log(error);
  } else {
    skills.value = data;
  }

  loading.value = false;
};

onMounted(() => {
  fetchSkills();
});
</script>

<template>
  <section id="about" class=" py-20 bg-gray-800 text-white">
  <div class="container grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
    <div class=" mx-auto px-8">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        About <span class="text-blue-500">Me</span>
      </h2>

      <p class="text-gray-300 leading-relaxed text-lg mb-4">
        I'm Bashir, a passionate Full-Stack Developer. I love building clean,
        modern interfaces and powerful web applications using
        <span class="text-blue-400 font-semibold">Vue</span>,
        <span class="text-blue-400 font-semibold">Tailwind</span>,
        and <span class="text-blue-400 font-semibold">Supabase</span>.
      </p>

      <p class="text-gray-400 leading-relaxed">
        My goal is to create digital experiences that are fast,
        responsive, and visually appealing — turning ideas into real
        interactive projects.
      </p>
    </div>

    <div class=" px-6">

      <h2 class="text-4xl font-bold mb-10 text-center">Skills</h2>

      <div v-if="loading" class="grid grid-cols-1  gap-6">
        <div class="mx-auto w-full max-w-sm rounded-xl border border-blue-300 p-4">
          <div class="flex animate-pulse space-x-4">
            <div class="size-10 rounded-full bg-gray-200"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 rounded bg-gray-200"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="errorMessage" class="text-center text-red-400">
        {{ errorMessage }}
      </div>

      <div v-else class="grid grid-cols-2 gap-3">

        <div
          v-for="skill in skills"
          :key="skill.id"
          class="p-3 bg-gray-900 rounded-xl shadow-lg"
        >
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center">
            <img :src="skill.icon" alt="" class="w-6">
            <h3 class="text-lg font-semibold ms-1">{{ skill.name }}</h3>
          </div>
          <p class="text-xs text-gray-400">{{ skill.level }}%</p>
        </div>

          <div class="w-full bg-gray-700 rounded-full h-2">
            <div
              class="bg-blue-500 h-2 rounded-full "
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>

        </div>

      </div>
    </div>
  </div>
  </section>
</template>
