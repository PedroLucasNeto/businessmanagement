<template>
  <div class="flex items-center gap-2 hover:text-secondary">
    <label class="flex items-center gap-2 cursor-pointer">
      <fa icon="fa-regular fa-moon" :class="currentTheme === 'dark' ? 'text-primary' : ''" />
      <input type="checkbox" value="light" data-toggle-theme="dark,light"
        class="toggle theme-controller hover:bg-secondary " @change="toggleTheme" checked />
      <fa icon="fa-solid fa-sun" :class="currentTheme === 'light' ? 'text-primary' : ''" />
    </label>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';

const currentTheme = ref('light');

function toggleTheme () {
  const toggle = document.querySelector('[data-toggle-theme]');
  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'light' : 'dark';
    currentTheme.value = toggle.checked ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  });
}

onMounted(() => {
  toggleTheme(false);
});
</script>

<style scoped></style>