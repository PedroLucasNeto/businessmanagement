<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li v-for="item in items" :key="item.name"><a>{{ item.name }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  { name: 'Sidebar Item 1' },
  { name: 'Sidebar Item 2' },
  { name: 'Sidebar Item 3' },
  { name: 'Sidebar Item 4' },
  { name: 'Sidebar Item 5' },
  { name: 'Sidebar Item 6' },
  { name: 'Sidebar Item 7' },
  { name: 'Sidebar Item 8' },
  { name: 'Sidebar Item 9' },
  { name: 'Sidebar Item 10' },
]); 
</script>

<style scoped></style>