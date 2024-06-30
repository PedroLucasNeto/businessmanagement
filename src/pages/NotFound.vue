<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Página não encontrada</h1>
        <p class="py-6">
          A página que você está procurando não existe ou foi movida.
        </p>
        <button @click="goBack()" class="btn btn-primary">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';

const goBack = () => {
  router.go(-1);
}

</script>

<style scoped></style>