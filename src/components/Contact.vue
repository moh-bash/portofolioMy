<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import emailjs from "@emailjs/browser";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

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
    errorMsg.value = t('contact.fill_all_fields');
    loading.value = false;
    return;
  }

  try {
    const { error: sbError } = await supabase.from("messages").insert([
      {
        name: name.value,
        email: email.value,
        message: message.value,
      },
    ]);

    if (sbError) throw sbError;

    await emailjs.send(
      'service_qgjn1rg',
      'template_e8l9ve8',
      {
        name: name.value,
        email: email.value,
        message: message.value,
      },
      '5jJVC7ZNwRTp4y-Sx'
    );

    success.value = true;
    name.value = "";
    email.value = "";
    message.value = "";

  } catch (error) {
    console.error("Error Detail:", error);
    errorMsg.value = t('contact.error');
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-20 md:py-10 h-full bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-6 md:px-10">
      <h2 class="text-4xl font-bold mb-10 text-center">
        {{ $t('contact.title_1') }}<span class="text-emerald-500">{{ $t('contact.title_2') }}</span>
      </h2>
      <div class="grid grid-cols-3 gap-5 md:gap-10">
        <div class="bg-gray-200 dark:bg-gray-800 shadow-md shadow-black/40 col-span-3 md:col-span-2 p-5 rounded-2xl">
          <form @submit.prevent="sendMessage" class="grid grid-cols-2 gap-0">

            <div class="col-span-2 md:col-span-1 me-3">
              <label class="block mb-2">{{ $t('contact.name') }}</label>
              <input
                v-model="name"
                type="text"
                class="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 border border-gray-700 focus:outline-none rounded-2xl"
              />
            </div>

            <div class="bg-gray-200 dark:bg-gray-800 col-span-2 md:col-span-1 rounded-2xl">
              <label class="block mb-2">{{ $t('contact.email') }}</label>
              <input
                v-model="email"
                type="email"
                class="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 border border-gray-700 focus:outline-none rounded-2xl"
              />
            </div>

            <div class="col-span-2 mt-2">
              <label class="block mb-2">{{ $t('contact.message') }}</label>
              <textarea
                v-model="message"
                rows="3"
                class="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 border border-gray-700 focus:outline-none rounded-2xl"
              ></textarea>
            </div>

            <button
              :disabled="loading"
              class="col-span-2 w-full md:w-1/3 mt-1 mx-auto text-white bg-emerald-600 hover:bg-emerald-700 py-3 rounded text-md font-semibold transition rounded-2xl"
            >
              {{ loading ? "Sending..." : $t('contact.send_message') }}
            </button>

            <p v-if="success" class="col-span-2 w-full mt-2 text-emerald-400 text-center">
              {{ $t('contact.success') }}
            </p>

            <p v-if="errorMsg" class="col-span-2 w-full mt-2 text-red-400 text-center">
              {{ errorMsg }}
            </p>
          </form>
        </div>

        <div dir="ltr" class="col-span-3 md:col-span-1 flex flex-col gap-4">
          <a href="https://t.me/Mhd_Bash" target="_blank" title="Contact me via telegram" class="flex items-center bg-gray-200 dark:bg-gray-800 shadow-md shadow-black/40 p-4 rounded-2xl">
            <img src="../assets/telegram-svgrepo-com.svg" alt="Telegram" class="w-15 inline text-emerald-500" />
            <div class="ms-3">
              <h3 class="text-emerald-500 text-xl font-bold">Telegram</h3>
              <p class="dark:text-gray-400 text-md leading-relaxed">@Mhd_Bash</p>
            </div>
          </a>
          <a href="mailto:mbashirkuja@gmail.com" target="_blank" title="Contact me via email" class="flex items-center bg-gray-200 dark:bg-gray-800 shadow-md shadow-black/40 p-4 rounded-2xl">
            <img src="../assets/gmail-svgrepo-com.svg" alt="email" class="w-15 inline text-emerald-500" />
            <div class="ms-3">
              <h3 class="text-emerald-500 text-xl font-bold">Email</h3>
              <p class="dark:text-gray-400 text-md leading-relaxed">mbashirkuja@gmail.com</p>
            </div>
          </a>
          <a href="http://www.linkedin.com/in/mohamad-bashir" title="Contact me via linkedin" target="_blank" class="flex items-center bg-gray-200 dark:bg-gray-800 shadow-md shadow-black/40 p-4 rounded-2xl">
            <img src="../assets/linkedin-1-svgrepo-com.svg" alt="linkedin" class="w-15 inline text-emerald-500" />
            <div class="ms-2">
              <h3 class="text-emerald-500 text-xl font-bold">Linkedin</h3>
              <p class="dark:text-gray-400 text-md leading-relaxed">Mohamad Bashir</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
