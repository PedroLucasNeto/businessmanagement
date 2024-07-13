<template>
  <div class="text-sm breadcrumbs custom-scroll">
    <ul>
      <li v-for="item in displayCrumbs" :key="item.path">
        <RouterLink :to="item.path" class="flex items-center justify-center gap-2" :class="activeComponent(item.path)">
          <fa :icon="item.icon" />
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { componentsList } from '@/utils/componentsList';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const displayCrumbs = computed(() => {
  return componentsList.filter(item => item.category !== 'Início');
});


function activeComponent(path) {
  return {
    'text-primary': route.path.includes(path)
  }
}
</script>

<style>
.custom-scroll {
  overflow-x: auto !important;
}
</style>