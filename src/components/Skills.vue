<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";

const skills = ref([]);
const loading = ref(true);
const errorMessage = ref("");

const fetchSkills = async () => {
  const { data, error } = await supabase.from("skills").select("*");

  if (error) {
    errorMessage.value = "خطأ في جلب البيانات";
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
  <section id="skills" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-6">

      <h2 class="text-4xl font-bold mb-10 text-center">Skills</h2>

      <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
          <div class="flex animate-pulse space-x-4">
            <div class="size-10 rounded-full bg-gray-200"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 rounded bg-gray-200"></div>
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
        <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
          <div class="flex animate-pulse space-x-4">
            <div class="size-10 rounded-full bg-gray-200"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 rounded bg-gray-200"></div>
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
        <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
          <div class="flex animate-pulse space-x-4">
            <div class="size-10 rounded-full bg-gray-200"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 rounded bg-gray-200"></div>
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
      </div>

      <div v-else-if="errorMessage" class="text-center text-red-400">
        {{ errorMessage }}
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div
          v-for="skill in skills"
          :key="skill.id"
          class="p-6 bg-gray-800 rounded-xl shadow-lg"
        >
          <h3 class="text-xl font-semibold mb-3">{{ skill.name }}</h3>

          <div class="w-full bg-gray-700 rounded-full h-3">
            <div
              class="bg-blue-500 h-3 rounded-full"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>

          <p class="text-sm mt-2 text-gray-400">{{ skill.level }}%</p>
        </div>

      </div>
    </div>
  </section>
</template>
