<template>
    <Table :tableData="clients" :tableFields="fields" :perPage="10" :quantity="clients.length || 0" />
</template>

<script setup>
import Table from '@/components/Table.vue';
import clientService from '@/api/services/clientService'
import { onMounted, ref } from 'vue';

const clients = ref([]);
// { "dateOfBirth": "1991-06-19", "email": "dih_adriana@hotmail.com", "favorite": false, "id": 77, "instagram": "", "name": "Adriana Sousa da silva", "occupation": "Cuidadora de Idosos", "phone": "83988623764", "status": true }

const fields = [
    { label: 'ID', value: 'id', type: 'number' },
    { label: 'Nome', value: 'name', type: 'string' },
    { label: 'Email', value: 'email', type: 'string' },
    { label: 'Telefone', value: 'phone', type: 'string' },
    { label: 'Data de Nascimento', value: 'dateOfBirth', type: 'date' },
    { label: 'Ocupação', value: 'occupation', type: 'string' },
    { label: 'Instagram', value: 'instagram', type: 'string' },
    { label: 'Status', value: 'status', type: 'boolean' },
]

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