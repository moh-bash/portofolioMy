<script setup>

import { ref, onMounted, onUnmounted } from "vue";



import Hero from "../components/Hero.vue";

import Skills from "../components/Skills.vue";

import Projects from "../components/Projects.vue";

import Contact from "../components/Contact.vue";



const activeSection = ref("hero");

const sections = ["hero", "skills", "projects", "contact"];

const isTransitioning = ref(false);

const scrollTimeout = ref(null);



const setSection = (section) => {

  activeSection.value = section;

};



const triggerTransition = (nextSection) => {

  isTransitioning.value = true;

  setSection(nextSection);



  setTimeout(() => {

    isTransitioning.value = false;

  }, 1500);

};



const handleScroll = (event) => {

  if (isTransitioning.value) return;



  const container = document.querySelector('.hide-scrollbar');

  if (!container) return;



  const currentIndex = sections.indexOf(activeSection.value);

  const isAtBottom = Math.abs(container.scrollHeight - container.clientHeight - container.scrollTop) < 5;

  const isAtTop = container.scrollTop === 0;

  clearTimeout(scrollTimeout.value);



  if (event.deltaY > 0 && isAtBottom) {

    if (currentIndex < sections.length - 1) {

      scrollTimeout.value = setTimeout(() => {

        triggerTransition(sections[currentIndex + 1]);

      }, 500);

    }

  }

  else if (event.deltaY < 0 && isAtTop) {

    if (currentIndex > 0) {

      scrollTimeout.value = setTimeout(() => {

        triggerTransition(sections[currentIndex - 1]);

      }, 500);

    }

  }

};



onMounted(() => {

  window.addEventListener("wheel", handleScroll, { passive: false });

});



onUnmounted(() => {

  window.removeEventListener("wheel", handleScroll);

  clearTimeout(scrollTimeout.value);

});

</script>



<template>

  <div

    class="w-full md:max-w-5xl md:h-[calc(80vh-80px)]
            md:mt-22
            lg:mt-24
            md:rounded-3xl
            bg-gray-800
            relative z-10
            border-1 border-emerald-500
            shadow-lg shadow-emerald-700/50"
    id="min"

  >

    <main
      class="scroll-smooth
              md:overflow-y-auto
              md:rounded-3xl
              h-full
              hide-scrollbar">

      <Hero v-show="activeSection === 'hero'" @go-to-projects="setSection('projects')" class="transition-opacity duration-300" />
      <Skills v-show="activeSection === 'skills'" class="transition-opacity duration-300" />
      <Projects v-show="activeSection === 'projects'" class="transition-opacity duration-300" />
      <Contact v-show="activeSection === 'contact'" class="transition-opacity duration-300" />

    </main>



    <nav

      class="fixed md:bottom-11 bottom-0

             md:left-1/2 md:-translate-x-1/2 w-full md:w-auto

             md:border-2 border-emerald-500

             bg-gray-50 dark:bg-gray-900

             md:rounded-3xl px-2 md:px-6 py-3

             flex justify-between items-center md:gap-5

             shadow-md md:shadow-emerald-500"

    >

      <button

        @click="setSection('hero')"

        class="flex flex-col items-center text-lg transition px-3 md:px-5 py-1 rounded-2xl"

        :class="

          activeSection === 'hero'

            ? 'bg-emerald-700 text-white font-semibold shadow shadow-emerald-600'

            : 'text-gray-700 dark:text-gray-400 hover:shadow hover:shadow-emerald-600'

        "

      >

        {{ $t('min.home') }}

      </button>



      <button

        @click="setSection('skills')"

        class="flex flex-col items-center text-lg transition px-3 md:px-5 py-1 rounded-2xl"

        :class="

          activeSection === 'skills'

            ? 'bg-emerald-600 text-white font-semibold shadow shadow-white'

            : 'text-gray-700 dark:text-gray-400 hover:shadow hover:shadow-emerald-600'

        "

      >

        {{ $t('min.skills') }}

      </button>



      <button

        @click="setSection('projects')"

        class="flex flex-col items-center text-lg transition px-3 md:px-5 py-1 rounded-2xl"

        :class="

          activeSection === 'projects'

            ? 'bg-emerald-600 text-white font-semibold shadow shadow-white'

            : 'text-gray-400 hover:shadow hover:shadow-emerald-600'

        "

      >

        {{ $t('min.projects') }}

      </button>



      <button

        @click="setSection('contact')"

        class="flex flex-col items-center text-lg transition px-3 md:px-5 py-1 rounded-2xl"

        :class="

          activeSection === 'contact'

            ? 'bg-emerald-600 text-white font-semibold shadow shadow-white'

            : 'text-gray-400 hover:shadow hover:shadow-emerald-600'"

      >

        {{ $t('min.contact') }}

      </button>

    </nav>

  </div>

</template>



<style scoped>

.hide-scrollbar {

}

.hide-scrollbar::-webkit-scrollbar {

  display: none;

}

</style>
