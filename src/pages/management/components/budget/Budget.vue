<template>
    {{ budgets }}
</template>

<script setup>
import budgetService from '@/api/services/budgetService'
import { onMounted, ref } from 'vue';

const budgets = ref([]);

async function getBudgets () {
    const budgetsFromDb = await budgetService.getAllBudgets();
    if (!budgetsFromDb) return;
    budgets.value = budgetsFromDb.map((budget) => {
        return {
            ...budget
        }
    })
}

onMounted(() => {
    getBudgets();
})

</script>

<style></style>