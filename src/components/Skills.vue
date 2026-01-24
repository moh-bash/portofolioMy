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
  <section id="about" class="h-full py-20
            bg-gray-50 dark:bg-gray-800
            dark:text-white">
  <div class="container grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
    <div class=" mx-auto px-8">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        {{ $t('about.title_1') }} <span class="text-emerald-500">{{ $t('about.title_2') }}</span>
      </h2>
      <p class="text-gray-800 dark:text-gray-300 leading-relaxed text-lg mb-4">
        {{ $t('about.description_1') }}
        <span class="text-emerald-400 font-semibold">Vue</span>,
        <span class="text-emerald-400 font-semibold">Vuetify</span>,
        <span class="text-emerald-400 font-semibold">Bootstrap</span>,
        and <span class="text-emerald-400 font-semibold">Tailwind</span>.
      </p>

      <p class="text-gray-900 dark:text-gray-400 leading-relaxed">
        {{ $t('about.goal') }}
      </p>
    </div>

    <div class=" px-6">
      <h2 class="text-4xl font-bold mb-10 text-center">{{ $t('about.skills_title_1') }}<span class="text-emerald-500">{{ $t('about.skills_title_2') }}</span></h2>
      <div v-if="loading" class="grid grid-cols-1  gap-6">
        <div class="mx-auto w-full max-w-sm rounded-xl border border-emerald-300 p-4">
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
        Error: {{ errorMessage }}
      </div>

      <div v-else class="grid grid-cols-2 gap-3">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="p-3 bg-gray-300 dark:bg-gray-900 rounded-xl shadow-lg"
        >
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center">
            <img :src="skill.icon" alt="" class="w-6">
            <h3 class="text-lg font-semibold ms-1">{{ skill.name }}</h3>
          </div>
          <p class="text-xs text-gray-400">{{ skill.level }}%</p>
        </div>
          <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
            <div
              class="bg-emerald-500 h-2 rounded-full "
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>
