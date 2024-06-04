<template>
  <div>
    <div>
      <h1 class="">Bem vindo <span class="font-bold">{Username}</span></h1>
      <h2>Mensagem...</h2>
    </div>
    <nav class="flex justify-between p-4 items-center">
      <Breadcrumbs />
    </nav>
    <div v-show="toggleStatusBar" class="flex flex-col justify-center items-center gap-4">
      <StatusBar />
      <CtaImageCard />
    </div>
    <div class="flex flex-col items-center gap-4 bg-base-300 p-4 h-screen">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import StatusBar from '@/components/StatusBar.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import CtaImageCard from '@/components/CtaImageCard.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
const route = useRoute();

const toggleStatusBar = computed(() => {
  return route.fullPath === '/management';
})

</script>

<style scoped></style>
