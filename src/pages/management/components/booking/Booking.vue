<template>
    {{ bookings }}
</template>

<script setup>
import bookingService from '@/api/services/bookingService'
import { onMounted, ref } from 'vue';

const bookings = ref([]);

async function getBookings () {
    const bookingsFromDb = await bookingService.getAllBookings();
    if (!bookingsFromDb) return;
    bookings.value = bookingsFromDb.map((booking) => {
        return {
            ...booking
        }
    })
}

onMounted(() => {
    getBookings();
})

</script>

<style></style>