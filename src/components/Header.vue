<template>
  <nav class="flex justify-between w-full p-4 items-center bg-neutral text-white">
    <fa :icon="'fa-solid fa-bars'" class=" cursor-pointer" :class="checkMenuOpen()" @click="toggleMenu()">
    </fa>
    <ul class=" flex justify-between space-x-4 items-center" v-if="authStore.isAuthenticated">
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
        <fa icon="fa-solid fa-bars-progress" />
      </RouterLink>
      <ToggleTheme />
      <label @click="authStore.loggout()" class="cursor-pointer hover:text-primary">Sair</label>
    </ul>
    <ToggleTheme v-else />
  </nav>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import ToggleTheme from '@/components/ToggleTheme.vue';
import { useAuthStore } from '@/stores/authStore';
import { useGlobalStore } from '@/stores/globalStore';

const authStore = useAuthStore();
const globalStore = useGlobalStore();

const isAdmin = computed(() => {
  if (!authStore.currentUser || !authStore.currentUser.groups) {
    return false;
  }
  return authStore.currentUser?.groups.includes('ADMIN');
});

function toggleMenu () {
  globalStore.toggleMenu();
}

function checkMenuOpen () {
  if (globalStore.menuOpen) {
    return 'text-secondary'
  }
 
  return ''
}

</script>

<style scoped></style>