<template>
    <Table :tableData="pricings" :tableFields="fields" :perPage="10" :quantity="pricings.length || 0" />
</template>

<script setup>
import Table from '@/components/Table.vue';
import pricingService from '@/api/services/pricingService'
import { onMounted, ref } from 'vue';

const pricings = ref([]);

const fields = [
    { label: 'ID', value: 'id', type: 'number' },
    { label: 'Nome', value: 'description', type: 'string' },
    { label: 'Duração', value: 'duration', type: 'hour' },
    { label: 'Valor', value: 'price', type: 'money' },
]

async function getPricings () {
    const pricingsFromDb = await pricingService.getAllPricings();
    if (!pricingsFromDb) return;
    pricings.value = pricingsFromDb.map((client) => {
        return {
            ...client
        }
    })
}

onMounted(() => {
    getPricings();
})

</script>

<style></style>