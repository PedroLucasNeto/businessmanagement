<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li v-for="item in items" :key="item.path">
        <RouterLink :to="item.path" class="flex items-center justify-center gap-2" active-class="text-primary">
          <fa :icon="'fa-solid fa-home'" />
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const items = [
  { name: 'Início', path: '/management' },
  { name: 'Produtos', path: '/management/product' },
  { name: 'Ensaios', path: '/management/booking' },
  { name: 'Eventos', path: '/management/event' },
  { name: 'Orçamentos', path: '/management/budget' },
  { name: 'Lançamentos', path: '/management/transaction' },
]

const route = useRoute();
const isActive = computed(() => {
  console.log('Route', route.fullPath)
  console.log('items', items[1].path)
  return items.find(item => item.path === route.fullPath);
})
</script>

<style scoped></style>