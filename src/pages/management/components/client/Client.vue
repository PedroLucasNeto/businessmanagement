<template>
    <Table :tableData="clients" :tableFields="fields" :perPage="10" :quantity="clients.length || 0" />
</template>

<script setup>
import Table from '@/components/Table.vue';
import clientService from '@/api/services/clientService'
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
const globalStore = useGlobalStore();

const clients = ref([]);

const fields = [
    { label: 'ID', value: 'id', type: 'number' },
    { label: 'Nome', value: 'name', type: 'string' },
    { label: 'Email', value: 'email', type: 'string' },
    { label: 'Telefone', value: 'phone', type: 'phone' },
    { label: 'Data de Nascimento', value: 'dateOfBirth', type: 'date' },
    { label: 'Ocupação', value: 'occupation', type: 'string' },
    { label: 'Instagram', value: 'instagram', type: 'string' },
]

async function getClients () {
    try {
        globalStore.setTableBusy(true);
        const clientsFromDb = await clientService.getAllClients();
        if (!clientsFromDb) return;
        clients.value = clientsFromDb.map((booking) => {
            return {
                ...booking
            }
        })
    } catch (error) {

    } finally {
        globalStore.setTableBusy(false);
    }
}

onMounted(() => {
    getClients();
})

</script>

<style></style>