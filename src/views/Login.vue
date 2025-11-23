<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">

      <h2 class="text-2xl font-bold mb-4 text-center">Admin Login</h2>

      <form @submit.prevent="login">

        <label class="block mb-2">Email:</label>
        <input
          v-model="email"
          type="email"
          class="w-full p-2 border rounded mb-4"
          placeholder="admin@example.com"
        />

        <label class="block mb-2">Password:</label>
        <input
          v-model="password"
          type="password"
          class="w-full p-2 border rounded mb-4"
          placeholder="******"
        />

        <button
          class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

      </form>

      <p v-if="errorMessage" class="text-red-600 mt-4 text-center">
        {{ errorMessage }}
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "@/supabase";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const errorMessage = ref("");

const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });

  if (error) {
    errorMessage.value = "خطأ في تسجيل الدخول!";
    return;
  }

  router.push("/admin");
};
</script>
