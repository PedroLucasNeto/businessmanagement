<template>
  <div class="p-4 bg-base-200">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">Eventos nessa semana</h2>
          <p class="text-2xl font-bold">{{ upcomingBookings > 0 ? upcomingBookings : '-' }}</p>
          <p class="text-sm text-gray-500">Próximo: {{ nextBookingDate }}</p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">Renda mensal</h2>
          <p class="text-2xl font-bold">{{ monthlyRevenue > 0 ? 'R$ ' + monthlyRevenue : '-' }}</p>
          <p class="text-sm text-gray-500">
            Total: {{ totalRevenue > 0 ? 'R$ ' + totalRevenue : '-' }}
          </p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">Novos Clientes</h2>
          <p class="text-2xl font-bold">{{ newClients > 0 ? newClients : '-' }}</p>
          <p class="text-sm text-gray-500">Esse mês</p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">Atalhos</h2>
          <div class="flex flex-col gap-2">
            <button class="btn btn-primary text-neutral-100" @click="navigateTo('calendar')">
              Abrir Calendário
            </button>
            <button class="btn btn-info text-neutral-100" @click="navigateTo('management/booking')">
              Gerenciar Ensaios
            </button>
            <button
              class="btn btn-accent text-neutral-100"
              @click="navigateTo('management/client')"
            >
              Visualizar Clientes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const upcomingBookings = ref(0)
const nextBookingDate = ref('')
const monthlyRevenue = ref(0)
const totalRevenue = ref(0)
const newClients = ref(0)

const router = useRouter()

// const fetchDashboardData = async () => {
//   // Fetch the data from your API
//   // Example:
//   const data = await fetch('/api/dashboard-summary').then(res => res.json());

//   upcomingBookings.value = data.upcomingBookings;
//   nextBookingDate.value = data.nextBookingDate;
//   monthlyRevenue.value = data.monthlyRevenue;
//   totalRevenue.value = data.totalRevenue;
//   newClients.value = data.newClients;
// };

const navigateTo = (route) => {
  router.push(`/${route}`)
}

onMounted(() => {
  // fetchDashboardData();
})
</script>

<style scoped>
.card-title {
  font-size: 1.5rem;
}
</style>
