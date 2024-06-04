<template>
  <details class="dropdown bg-" ref="dropdown">
    <summary class="m-1 btn">
      <slot name="title">
        Gerenciar
      </slot>
    </summary>
    <ul class="p-2 shadow menu dropdown-content z-[1] bg-lightblue rounded-box w-fit">
      <slot name="options">
        <li v-for="item in items" :key="item.name">
          <RouterLink :to="item.path" @click="closeDropdown">
            {{ item.name }}
          </RouterLink>
        </li>
      </slot>
    </ul>
  </details>
</template>

<script setup>
import { ref } from 'vue';
const items = defineModel({
  type: Array,
  default: () => []
})
const dropdown = ref(null);

function closeDropdown () {
  dropdown.value.removeAttribute('open');
}
</script>

<style scoped></style>
