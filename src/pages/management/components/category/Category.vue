<template>
  {{ categories }}
</template>

<script setup>
import categoryService from '@/api/services/categoryService'
import { onMounted, ref } from 'vue';

const categories = ref([]);

async function getCategories () {
  const categoriesFromDb = await categoryService.getAllCategories();
  if (!categoriesFromDb) return;
  categories.value = categoriesFromDb.map((budget) => {
    return {
      ...budget
    }
  })
}

onMounted(() => {
  getCategories();
})

</script>

<style></style>