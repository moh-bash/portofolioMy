<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";

const name = ref("");
const email = ref("");
const message = ref("");

const loading = ref(false);
const success = ref(false);
const errorMsg = ref("");

const sendMessage = async () => {
  loading.value = true;
  success.value = false;
  errorMsg.value = "";

  if (!name.value || !email.value || !message.value) {
    errorMsg.value = "الرجاء تعبئة جميع الحقول";
    loading.value = false;
    return;
  }

  const { error } = await supabase.from("messages").insert([
    {
      name: name.value,
      email: email.value,
      message: message.value,
    },
  ]);

  if (error) {
    console.log(error);
    errorMsg.value = "حدث خطأ أثناء إرسال الرسالة";
  } else {
    success.value = true;
    name.value = "";
    email.value = "";
    message.value = "";
  }

  loading.value = false;
};
</script>

<template>
  <section id="contact" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-6 max-w-xl">

      <h2 class="text-4xl font-bold mb-10 text-center">Contact Me</h2>

      <form @submit.prevent="sendMessage" class="space-y-6 grid grid-cols-2 gap-0">

        <div class="col-span-2 md:col-span-1  me-3">
          <label class="block mb-2">Name</label>
          <input
            v-model="name"
            type="text"
            class="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none rounded-2xl"
          />
        </div>

        <div class="col-span-2 md:col-span-1">
          <label class="block mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none rounded-2xl"
          />
        </div>

        <div class="col-span-2">
          <label class="block mb-2">Message</label>
          <textarea
            v-model="message"
            rows="3"
            class="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none rounded-2xl"
          ></textarea>
        </div>

        <button
          :disabled="loading"
          class="col-span-2 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded text-lg font-semibold transition rounded-2xl"
        >
          {{ loading ? "Sending..." : "Send Message" }}
        </button>

        <p v-if="success" class="text-green-400 text-center">
          ✔️ تم إرسال الرسالة بنجاح!
        </p>

        <p v-if="errorMsg" class="text-red-400 text-center">
          {{ errorMsg }}
        </p>
      </form>

    </div>
  </section>
</template>
