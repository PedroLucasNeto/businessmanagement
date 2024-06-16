<template>
    {{ pricings }}
</template>

<script setup>
import pricingService from '@/api/services/pricingService'
import { onMounted, ref } from 'vue';

const pricings = ref([]);

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