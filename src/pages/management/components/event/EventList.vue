<template>
    <Table :tableData="events" :tableFields="fields" :perPage="10" :quantity="events.length || 0" />
</template>

<script setup>
import Table from '@/components/Table.vue';
import eventsService from '@/api/services/eventsService'
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

const globalStore = useGlobalStore();

const events = ref([]);
const fields = [
    { label: 'ID', value: 'id', type: 'number' },
    { label: 'Nome', value: 'title', type: 'string' },
    { label: 'Descrição', value: 'description', type: 'string' },
    { label: 'Data', value: 'date', type: 'date' },
]

async function getEvents () {
    try {
        globalStore.setTableBusy(true);
        const eventsFromDb = await eventsService.getAllEvents();
        if (!eventsFromDb) return;
        events.value = eventsFromDb.map((client) => {
            return {
                ...client
            }
        })
    } catch (error) {

    } finally {
        globalStore.setTableBusy(false);
    }
}

onMounted(() => {
    getEvents();
})

</script>

<style></style>