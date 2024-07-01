<template>
  <div class="flex flex-col gap-4">
    <nav class="flex justify-between p-4 items-center">
      <Breadcrumbs />
    </nav>
    <!-- <CtaImageCard /> -->
    <div class="flex flex-col items-center gap-4 bg-base-200 p-4 h-screen">
      <RouterView />
    </div>
  </div>
</template>

<script setup>

import Breadcrumbs from '@/components/Breadcrumbs.vue'


</script>

<style scoped></style>
