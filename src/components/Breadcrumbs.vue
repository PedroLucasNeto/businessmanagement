<template>
  <div class="text-sm breadcrumbs custom-scroll">
    <ul>
      <li v-for="item in items" :key="item.path">
        <RouterLink :to="item.path" class="flex items-center justify-center gap-2" active-class="text-primary">
          <fa :icon="item.icon" />
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
// import { computed } from 'vue';
import { useRoute } from 'vue-router';

const items = [
  { name: 'Gestão', icon: 'fa-solid fa-home', path: '/management' },
  { name: 'Calendário', icon: 'fa-solid fa-calendar', path: '/management/calendar' },
  { name: 'Orçamentos', icon: 'fa-solid fa-bag-shopping', path: '/management/budget' },
  { name: 'Ensaios', icon: 'fa-solid fa-calendar', path: '/management/booking' },
  { name: 'Clientes', icon: 'fa-solid fa-user', path: '/management/client' },
  { name: 'Eventos', icon: 'fa-solid fa-flag', path: '/management/event' },
  { name: 'Produtos', icon: 'fa-solid fa-box-open', path: '/management/product' },
  { name: 'Lançamentos', icon: 'fa-solid fa-money-bill-transfer', path: '/management/transaction' },
  { name: 'Categoria', icon: 'fa-solid fa-money-bill-transfer', path: '/management/category' },
  { name: 'Pacote', icon: 'fa-solid fa-money-bill-transfer', path: '/management/pricing' },

]

const route = useRoute();
// const isActive = computed(() => {
//   return items.find(item => item.path === route.fullPath);
// })
</script>

<style>
.custom-scroll{
  overflow-x: auto !important;
}


</style>