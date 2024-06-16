<template>
    {{ clients }}
</template>

<script setup>
import clientService from '@/api/services/clientService'
import { onMounted, ref } from 'vue';

const clients = ref([]);

async function getClients () {
    const clientsFromDb = await clientService.getAllClients();
    if (!clientsFromDb) return;
    clients.value = clientsFromDb.map((booking) => {
        return {
            ...booking
        }
    })
}

onMounted(() => {
    getClients();
})

</script>

<style></style>