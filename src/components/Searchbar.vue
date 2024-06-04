<template>
  <label class="input input-bordered flex items-center gap-2">
    <input type="text" class="grow" placeholder="Search" />
    <slot name="icon">
      <kbd class="kbd kbd-sm">⌘</kbd>
      <kbd class="kbd kbd-sm">K</kbd>
    </slot>
  </label>
</template>

<script setup lang='ts'>
</script>

<style scoped></style>