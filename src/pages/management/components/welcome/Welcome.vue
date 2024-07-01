<template>
  <div class="flex flex-row justify-between items-center gap-4">
    <div>
      <h1 class="">Olá <span class="font-bold">{{ username }}</span></h1>
      <h2>Confira seu resumo</h2>
    </div>
    <StatusBar :booking="booking" :budget="budget" :goal="goal" />
  </div>
</template>

<script setup>
import StatusBar from '@/components/StatusBar.vue'
import { computed, ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

const username = computed(() => {
  if (!authStore.currentUser) return '';
  return authStore.currentUser.preferred_username.split(' ').slice(0, 2).join(' ');
});

const booking = ref({
  count: 2,
  comparedToLastMonth: 10,
})
const budget = ref({
  count: 1,
  comparedToLastMonth: 10,
})

const goal = ref(10);
</script>

<style scoped></style>