<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li v-for="item in items" :key="item.path">
        <RouterLink :to="item.to" class="flex items-center justify-center gap-2" exact-active-class="text-primary">
          <fa :icon="'fa-solid fa-home'" />
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const items = [
  { name: 'Início', path: '/management' },
  { name: 'Produtos', path: '/management/products' },
  { name: 'Ensaios', path: '/management/bookings' },
  { name: 'Eventos', path: '/management/events' },
  { name: 'Orçamentos', path: '/management/budgets' },
  { name: 'Lançamentos', path: '/management/' },
]
</script>

<style scoped></style>