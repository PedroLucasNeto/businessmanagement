<template>
    <div class="flex flex-col items-center gap-4 bg-base-300 p-4 h-screen">
        <div class="flex justify-start w-full">
            <button :class="isOpen ? 'btn-error' : 'btn-success'" class="btn w-fit  text-white "
                @click="createProduct">{{ isOpen ? 'Cancelar' : 'Adicionar' }}</button>
        </div>
        <Table v-show="!isOpen" :editItem="editItem" :retrieveItem="retrieveItem" :deleteItem="deleteItem"
            :tableData="products" :tableFields="fields" :classes="'w-64 striped bg-white'">
        </Table>
        <div class="pt-4 flex flex gap-4" v-show="isOpen">
            <div class="flex flex-col gap-2">
                <h1 class="font-bold">Dados do Produto</h1>
                <ProductsForm :isOpen="isOpen" :product="product" />
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="font-bold">Pré visualização</h1>
                <Product :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Table from '@/components/Table.vue';
import { ref, watch, nextTick, onMounted, computed } from 'vue';
import ProductsForm from './ProductsForm.vue';
import productsService from '@/api/productsService.js';
import Product from '@/components/Product.vue';

const isOpen = ref(false);
const formProduct = ref(null);
const product = ref({})
const data = ref([]);

function createProduct () {
    product.value = {};
    toggleForm();
}
function toggleForm () {
    isOpen.value = !isOpen.value;
}

function editItem (item) {
    product.value = item;
    toggleForm();
}
function deleteItem (item) {
    productsService.deleteProduct(item.id);
    getProducts();
}
function retrieveItem (item) {
}

const fields = [{ label: '#', conf: 'id' }, { label: 'Nome', conf: 'name' }, { label: 'Preço', conf: 'price' }];

async function getProducts () {
    const response = await productsService.getAllProducts();
    data.value = response;
}

const products = computed(() => data.value.map((product) => {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image
    }
}));

onMounted(() => {
    getProducts()
});

watch(isOpen, async (newValue) => {
    if (newValue) {
        await nextTick();
        if (formProduct.value) {
            formProduct.value.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        scrollTo(0, 0);
    }
});
</script>

<style scoped></style>