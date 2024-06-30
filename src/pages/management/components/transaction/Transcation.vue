<template>
    <Table :tableData="transactions" :tableFields="fields" :perPage="10" :quantity="transactions.length" />
</template>

<script setup>
import Table from '@/components/Table.vue';
import transactionService from '@/api/services/transactionService'
import { onMounted, ref } from 'vue';

import { useGlobalStore } from '@/stores/globalStore';

const globalStore = useGlobalStore();

const transactions = ref([]);

const fields = [
    { label: 'ID', value: 'id', type: 'number' },
    { label: 'Valor', value: 'amount', type: 'money' },
    { label: 'Origem', value: 'origin', type: 'stirng' },
    { label: 'Data', value: 'paymentDate', type: 'date' },
    { label: 'Data do Registro', value: 'creationDate', type: 'date' },
]

async function getTransactions () {

    try {
        globalStore.setTableBusy(true);
        const transactionsFromDb = await transactionService.getAllTransactions();
        if (!transactionsFromDb) return;
        transactions.value = transactionsFromDb.map((transaction) => {
            return {
                ...transaction
            }
        })
    } catch (error) {

    } finally {
        globalStore.setTableBusy(false);
    }
}


onMounted(() => {
    getTransactions();
})

</script>

<style></style>