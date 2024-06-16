<template>
    {{ events }}
</template>

<script setup>
import eventsService from '@/api/services/eventsService'
import { onMounted, ref } from 'vue';

const events = ref([]);

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