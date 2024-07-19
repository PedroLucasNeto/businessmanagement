<template>
  <Table :tableData="budgets" :tableFields="fields" :perPage="10" :quantity="budgets.length || 0" />
</template>

<script setup>
import Table from '@/components/Table.vue'
import budgetService from '@/api/services/budgetService'
import { onMounted, ref } from 'vue'

import { useGlobalStore } from '@/stores/globalStore'

const globalStore = useGlobalStore()

const budgets = ref([])
const fields = [
  { label: 'ID', value: 'id', type: 'number' },
  { label: 'Valor', value: 'amount', type: 'money' },
  { label: 'Descrição', value: 'description', type: 'string' },
  { label: 'Data', value: 'date', type: 'date' }
]

async function getBudgets() {
  try {
    globalStore.setTableBusy(true)
    const budgetsFromDb = await budgetService.getAllBudgets()
    if (!budgetsFromDb) return
    budgets.value = budgetsFromDb.map((budget) => {
      return {
        ...budget
      }
    })
  } catch (error) {
  } finally {
    globalStore.setTableBusy(false)
  }
}

onMounted(() => {
  getBudgets()
})
</script>

<style></style>
