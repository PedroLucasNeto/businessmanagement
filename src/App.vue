<template>
  <Header />
  <Transition name="fade" mode="out-in">
    <div class="min-w-full max-w-full p-4 min-h-screen">
      <RouterView />
    </div>
  </Transition>
  <Sidebar />
  <Footer />
</template>
<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

/* Applying the font to your elements */
* {
  font-family: 'Montserrat' !important;
}
</style>
