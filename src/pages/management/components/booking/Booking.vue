<template>
    <Table :tableData="bookings" :tableFields="fields" :perPage="10" :quantity="bookings.length || 0" />
</template>

<script setup>
import Table from '@/components/Table.vue';
import bookingService from '@/api/services/bookingService'
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

const globalStore = useGlobalStore();

const bookings = ref([]);

const fields = [
    { label: 'ID', value: 'id', type: 'number' },
    { label: 'Data', value: 'bookedDate', type: 'date' },
    { label: 'Cliente', value: 'client', type: 'string' },
    { label: 'Pacote', value: 'pricing', type: 'string' },
    { label: 'Categoria', value: 'category', type: 'string' },
    { label: 'Data do Ensaio', value: 'photoShootDate', type: 'date' },
]


async function getBookings () {
    try {
        globalStore.setTableBusy(true);
        const bookingsFromDb = await bookingService.getAllBookings();
        if (!bookingsFromDb) return;
        bookings.value = bookingsFromDb.map((booking) => {
            return {
                ...booking,
                client: booking.client.name,
                category: booking.category.description,
                pricing: booking.pricing.description,
            }
        })
    } catch (error) {

    } finally {
        globalStore.setTableBusy(false);

    }
}

onMounted(() => {
    getBookings();
})

</script>

<style></style>