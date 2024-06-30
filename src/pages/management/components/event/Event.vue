<template>
    <Table :tableData="events" :tableFields="fields" :perPage="10" :quantity="events.length || 0" />
</template>

<script setup>
import Table from '@/components/Table.vue';
import eventsService from '@/api/services/eventsService'
import { onMounted, ref } from 'vue';

const events = ref([]);
const fields = [
    { label: 'ID', value: 'id', type: 'number' },
    { label: 'Nome', value: 'title', type: 'string' },
    { label: 'Descrição', value: 'description', type: 'string' },
    { label: 'Data', value: 'date', type: 'date' },
]

async function getEvents () {
    const eventsFromDb = await eventsService.getAllEvents();
    if (!eventsFromDb) return;
    events.value = eventsFromDb.map((client) => {
        return {
            ...client
        }
    })
}

onMounted(() => {
    getEvents();
})

</script>

<style></style>