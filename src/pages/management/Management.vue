<template>
  <div class="flex flex-col gap-4">
    <div>
      <h1 class="">Bem vindo <span class="font-bold">{{ username }}</span></h1>
      <h2>Mensagem...</h2>


    </div>
    <nav class="flex justify-between p-4 items-center">
      <Breadcrumbs />
    </nav>
    <div class="flex flex-col justify-center items-center gap-4">
      <StatusBar :booking="booking" :budget="budget" :goal="goal" />
    </div>
    <!-- <CtaImageCard /> -->
    <div class="flex flex-col items-center gap-4 bg-base-200 p-4 h-screen">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import StatusBar from '@/components/StatusBar.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import { computed, ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
const authStore = useAuthStore();

const booking = ref({
  count: 2,
  comparedToLastMonth: 10,
})
const budget = ref({
  count: 1,
  comparedToLastMonth: 10,
})

const goal = ref(10);

// split [' '] and get the two first names
const username = computed(() => {
  if (!authStore.currentUser) return '';
  return authStore.currentUser.preferred_username.split(' ').slice(0, 2).join(' ');
});

</script>

<style scoped></style>
