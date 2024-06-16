<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login</h1>
        <p class="py-6">Faça seu login para continuar.</p>
      </div>
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="card-body" @submit.prevent="login">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" v-model="email" class="input input-bordered" required :disabled="authStore.isLoading" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Senha</span>
            </label>
            <input type="password" v-model="password" class="input input-bordered" required
              :disabled="authStore.isLoading" />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">Esqueceu a senha?</a>
            </label>
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">Criar usuário</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" type="submit" :disabled="authStore.isLoading">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');

async function login () {
  await authStore.login({ email: email.value, password: password.value });
  console.log(authStore.isAuthenticated)
  if (authStore.isAuthenticated) {
    router.push('/');
  }
}



</script>