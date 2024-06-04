<template>
    <div class="bg-white rounded-lg shadow-md p-4  ">
        <img :src="product.image" :alt="product.name" class="sm:w-full h-40 object-cover rounded-md">
        <h3 class="text-lg font-semibold mt-2">{{ product.name }}</h3>
        <p class="text-gray-500 mt-1">{{ product.description }}</p>
        <div class="flex justify-between items-center pt-4">
            <button class="btn btn-primary text-white" @click="addToCart">Comprar Agora</button>
            <fa @click="addToCart" :icon="'fa-solid fa-cart-plus'"
                class="text-primary hover:text-base-200 cursor-pointer" />
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps({
    product: {
        type: Object,
    }
});

function addToCart () {
    if (!product.id) return;
    console.log('product id', product.id);
}
</script>

<style scoped></style>