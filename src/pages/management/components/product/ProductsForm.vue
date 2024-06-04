<template>
  <form ref="formProduct" class="flex flex-col shadow-xl space-y-4 p-4 shadow rounded-lg w-fit bg-base-100 py-4">
    <div v-if="product.id">
      <label>Id</label>
      <input type="text" class="input input-bordered w-full max-w-xs" v-model="product.id" disabled />
    </div>
    <label>Nome</label>
    <input type="text" placeholder="Ex: Tênis" class="input input-bordered w-full max-w-xs" v-model="product.name" />
    <label>Preço</label>
    <input type="number" placeholder="Ex: Tênis Adidas" class="input input-bordered w-full max-w-xs"
      v-model="product.price" />
    <label>Descrição</label>
    <input type="text" placeholder="Ex: Tênis Adidas" class="input input-bordered w-full max-w-xs"
      v-model="product.description" />
    <label>Imagem</label>
    <input type="file" accept="image/*" class="file-input file-input-bordered w-full max-w-xs"
      @change="setProductImage" />
    <button v-if="!product.id" class="btn btn-success w-fit text-white" @click.prevent="saveProduct">Salvar</button>
    <button v-else class="btn btn-success w-fit text-white" @click.prevent="editProduct">Alterar</button>
  </form>
</template>

<script setup>
import productsService from '@/api/productsService.js';

const product = defineModel('product', {
  type: Object
})

function setProductImage (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      product.value.image = event.target.result;
    };
    reader.readAsDataURL(file);
  }
}

async function saveProduct () {
  try {
    await productsService.createProduct(product.value);
    product.value = {};
  } catch (error) {
    console.log(error)
  }
}

async function editProduct () {
  try {
    await productsService.updateProduct(product.value);
    product.value = {};
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped></style>
