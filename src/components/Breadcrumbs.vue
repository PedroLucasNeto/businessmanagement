<template>
  <div class="text-sm breadcrumbs custom-scroll">
    <ul>
      <li v-for="item in displayCrumbs" :key="item.path">
        <RouterLink :to="item.path" class="flex items-center justify-center gap-2" active-class="text-primary">
          <fa :icon="item.icon" />
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
    <a v-show="false">
      V-SHOW
    </a>
    <a v-if="false">
      V-IF
    </a>
  </div>
</template>

<script setup>
import { componentsList } from '@/utils/componentsList';
import { computed } from 'vue';

const displayCrumbs = computed(() => {
  return componentsList.filter(item => item.category !== 'Início');
});

</script>

<style>
.custom-scroll {
  overflow-x: auto !important;
}
</style>