<template>
  <div class="bg-gray-900 min-h-screen text-white">
    <Navbar/>
    <router-view />
    <Footer/>
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

</script>

<style>
</style>
