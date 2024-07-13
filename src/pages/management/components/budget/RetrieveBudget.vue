<template>
  <div class="flex flex-col items-center justify-center h-full w-full">
    <span
      v-if="globalStore.isLoading"
      class="loading loading-spinner loading-lg text-success"
    ></span>
    <div v-else class="flex flex-col items-center justify-center gap-4 w-full">
      <h1 class="text-2xl font-bold">Dados do Budgete</h1>
      <div
        class="w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden max-w-2xl border border-gray-200"
      >
        <div class="w-full p-4">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="name">Nome</label>
              <input
                type="text"
                id="name"
                class="input input-bordered"
                v-model="budget.name"
                :disabled="!isEditable"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                class="input input-bordered"
                v-model="budget.email"
                :disabled="!isEditable"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                class="input input-bordered"
                v-model="budget.phone"
                :disabled="!isEditable"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="dateOfBirth">Data de Nascimento</label>
              <input
                type="date"
                id="dateOfBirth"
                class="input input-bordered"
                v-model="budget.dateOfBirth"
                :disabled="!isEditable"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="occupation">Ocupação</label>
              <input
                type="text"
                id="occupation"
                class="input input-bordered"
                v-model="budget.occupation"
                :disabled="!isEditable"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="instagram">Instagram</label>
              <input
                type="text"
                id="instagram"
                class="input input-bordered"
                v-model="budget.instagram"
                :disabled="!isEditable"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center gap-4">
        <button v-show="isEditable" class="btn btn-success text-white" @click="save">Salvar</button>
        <button class="btn btn-primary" @click="toggleEdit">
          {{ isEditable ? 'Cancelar' : 'Editar' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import budgetService from '@/api/services/budgetService'
import { useGlobalStore } from '@/stores/globalStore'
const route = useRoute()
const id = route.params.id

const budget = ref({})
const isEditable = ref(false)
const globalStore = useGlobalStore()

async function getBudget() {
  globalStore.isLoading = true
  try {
    const budgetFromDb = await budgetService.getBudgetById(id)
    if (!budgetFromDb) return
    budget.value = budgetFromDb
  } catch (error) {
    console.log(error)
  } finally {
    globalStore.isLoading = false
  }
}

async function save() {
  try {
    await budgetService.updateBudget(budget.value)
    getBudget()
  } catch (error) {
    console.log(error)
  }
  isEditable.value = false
}

const toggleEdit = () => {
  if (isEditable.value) {
    getBudget()
  }
  isEditable.value = !isEditable.value
}

onMounted(() => {
  getBudget()
})
</script>
