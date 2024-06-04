<template>
  <button :class="classes" class="btn" @click="null">
    <slot>
      Click me
    </slot>
  </button>
</template>

<script setup lang='ts'>
import { inject } from 'vue';

const classes = defineModel('classes', {
  type: String,
  default: 'btn btn-primary text-white'
})

</script>

<style scoped></style>