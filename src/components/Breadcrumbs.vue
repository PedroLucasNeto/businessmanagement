<template>
  <div class="text-sm breadcrumbs custom-scroll">
    <ul>
      <li v-for="item in componentsList" :key="item.path">
        <RouterLink :to="item.path" class="flex items-center justify-center gap-2" active-class="text-primary">
          <fa :icon="item.icon" />
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { componentsList } from '@/utils/ComponentsList';

</script>

<style>
.custom-scroll {
  overflow-x: auto !important;
}
</style>