<template>
    {{ transactions }}
</template>

<script setup>
import transactionService from '@/api/services/transactionService'
import { onMounted, ref } from 'vue';

const transactions = ref([]);

async function getTransactions () {
    const transactionsFromDb = await transactionService.getAllTransactions();
    if (!transactionsFromDb) return;
    transactions.value = transactionsFromDb.map((transaction) => {
        return {
            ...transaction
        }
    })
}

onMounted(() => {
    getTransactions();
})

</script>

<style></style>