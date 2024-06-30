<template>
  <Table :tableData="categories" :tableFields="fields" :perPage="10" :quantity="categories.length" />
</template>

<script setup>
import Table from '@/components/Table.vue';
import categoryService from '@/api/services/categoryService'
import { onMounted, ref } from 'vue';

const categories = ref([]);
// { "description": "Pessoal", "id": 1, "status": true }
const fields = [
  { label: 'ID', value: 'id', type: 'number' },
  { label: 'Descrição', value: 'description', type: 'string' },
]

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