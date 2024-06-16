<template>
  <nav class="flex justify-between w-full p-4 items-center">
    <div>
      <RouterLink :to="authStore.isAuthenticated ? '/' : '/login'" class="hover:text-secondary"
        active-class="text-primary">
        <fa :icon="'fa-solid fa-home'"></fa>
      </RouterLink>
    </div>

    <ul class="flex justify-between space-x-4 items-center" v-if="authStore.isAuthenticated">
      <RouterLink to="/" v-if="isAdmin" class="cursor-pointer hover:text-secondary" active-class="text-primary">
        <fa icon="fa-solid fa-home" />
      </RouterLink>
      <RouterLink to="/calendar" v-if="isAdmin" class="cursor-pointer hover:text-secondary" active-class="text-primary">
        <fa icon="fa-solid fa-calendar" />
      </RouterLink>
      <!-- <RouterLink to="/" v-if="isAdmin" class="cursor-pointer hover:text-secondary" active-class="text-primary">
        <fa icon="fa-solid fa-user" />
      </RouterLink> -->
      <RouterLink to="/management" v-if="isAdmin" class="cursor-pointer hover:text-secondary"
        active-class="text-primary">
        <fa icon="fa-solid fa-gear" />
      </RouterLink>
      <ToggleTheme />
      <label @click="authStore.loggout()" class="cursor-pointer hover:text-primary">Sair</label>
    </ul>
    <ToggleTheme v-else />
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import ToggleTheme from '@/components/ToggleTheme.vue';
import { useAuthStore } from '@/stores/authStore';

const isAdmin = computed(() => true);

const authStore = useAuthStore();

</script>

<style scoped></style>