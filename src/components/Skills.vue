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

      <div v-if="loading" class="text-center text-gray-400">
        Loading...
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
