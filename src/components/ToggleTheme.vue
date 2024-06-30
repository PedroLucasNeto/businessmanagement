<template>
  <div class="flex items-center  gap-2">
    <label class="flex cursor-pointer gap-2"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
      <input type="checkbox" value="light" data-toggle-theme="dark,light" class="toggle theme-controller"
        @change="toggleTheme" checked />
        <fa icon="fa-light fa-sun" />
    </label>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

function toggleTheme () {
  const toggle = document.querySelector('[data-toggle-theme]');
  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  });
}

onMounted(() => {
  toggleTheme(false);
});
</script>

<style scoped></style>