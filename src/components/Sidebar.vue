<template>
  <div class="drawer z-50">
    <input id="sidebar" type="checkbox" class="drawer-toggle" v-model="globalStore.menuOpen" />
    <div class="drawer-side">
      <label for="sidebar" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <template v-for="(item, index) in categorizedComponents" :key="index">
          <li v-if="item.type === 'category'" class="menu-title text-black cursor-default">
            <span>{{ item.name }}</span>
          </li>
          <li v-else>
            <RouterLink class="flex flex-row justify-between items-center" active-class="text-primary" :to="item.path"
              @click="globalStore.toggleMenu()">
              {{ item.name }}
              <fa :icon="item.icon" />
            </RouterLink>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/globalStore';
import { componentsList } from '@/utils/componentsList';

const globalStore = useGlobalStore();

const categorizedComponents = [];
let lastCategory = null;

componentsList.forEach(item => {
  if (item.category !== lastCategory) {
    categorizedComponents.push({ type: 'category', name: item.category });
    lastCategory = item.category;
  }
  categorizedComponents.push({ type: 'item', ...item });
});
</script>

<style scoped></style>
