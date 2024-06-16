<template>
    {{ addon }}
</template>

<script setup>
import addonService from '@/api/services/addonService'
import { onMounted, ref } from 'vue';

const addon = ref([]);

async function getAddons () {
    const addonFromDb = await addonService.getAllAddons();
    if (!addonFromDb) return;
    addon.value = addonFromDb.map((addon) => {
        return {
            ...addon
        }
    })
}

onMounted(() => {
    getAddons();
})

</script>

<style></style>