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

const items = [
  { name: 'Gestão', icon: 'fa-solid fa-home', path: '/management' },
  { name: 'Orçamentos', icon: 'fa-solid fa-bag-shopping', path: '/management/budget' },
  { name: 'Ensaios', icon: 'fa-solid fa-calendar', path: '/management/booking' },
  { name: 'Clientes', icon: 'fa-solid fa-user', path: '/management/client' },
  { name: 'Eventos', icon: 'fa-solid fa-flag', path: '/management/event' },
  { name: 'Adicionais Do Evento', icon: 'fa-solid fa-plus-circle', path: '/management/addon' },
  { name: 'Lançamentos', icon: 'fa-solid fa-money-bill-transfer', path: '/management/transaction' },
  { name: 'Categoria', icon: 'fa-solid fa-list', path: '/management/category' },
  { name: 'Pacote', icon: 'fa-solid fa-box-open', path: '/management/pricing' },
]
</script>

<style>
.custom-scroll {
  overflow-x: auto !important;
}
</style>