<template>
  <Table :tableData="categories" :tableFields="fields" :perPage="10" :quantity="categories.length" />
</template>

<script setup>
import Table from '@/components/Table.vue';
import categoryService from '@/api/services/categoryService'
import { onMounted, ref } from 'vue';

import { useGlobalStore } from '@/stores/globalStore';

const globalStore = useGlobalStore();

const categories = ref([]);
// { "description": "Pessoal", "id": 1, "status": true }
const fields = [
  { label: 'ID', value: 'id', type: 'number' },
  { label: 'Descrição', value: 'description', type: 'string' },
]

async function getCategories () {
  try {
    globalStore.setTableBusy(true);
    const categoriesFromDb = await categoryService.getAllCategories();
    if (!categoriesFromDb) return;
    categories.value = categoriesFromDb.map((budget) => {
      return {
        ...budget
      }
    })
  } catch (error) {

  } finally {
    globalStore.setTableBusy(false);

  }
}

onMounted(() => {
  getCategories();
})

</script>

<style></style>