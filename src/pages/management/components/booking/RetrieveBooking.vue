<template>
  <!-- create a retrieve visualization for booking data, it is for a specific booking no all of them -->
  {{ booking.client}}
  <div class="flex flex-col items-center justify-center h-full w-full">
    <span
      v-if="globalStore.isLoading"
      class="loading loading-spinner loading-lg text-success"
    ></span>
    <div v-else class="flex flex-col items-center justify-center gap-4 w-full">
      <h1 class="text-2xl font-bold">Dados do Ensaio  </h1>
      <div
        class="w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden max-w-2xl border border-gray-200"
      >
        <div class="w-full p-4">
        
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="photoShootDate">Data do Ensaio</label>
              <input
                type="datetime-local"
                id="photoShootDate"
                class="input input-bordered"
                v-model="booking.photoShootDate"
                :disabled="!isEditable"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="bookedDate">Data de Agendamento</label>
              <input
                type="date"
                id="bookedDate"
                class="input input-bordered"
                v-model="booking.bookedDate"
                disabled
              />
            </div>
      
           
            <div class="flex flex-col gap-2">
              <label for="totalPrice">Preço Total</label>
              <input
                type="number"
                id="totalPrice"
                class="input input-bordered"
                v-model="booking.totalPrice"
                :disabled="!isEditable"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="notes">Observações</label>
              <textarea
                id="notes"
                class="textarea textarea-bordered"
                v-model="booking.notes"
                :disabled="!isEditable"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center gap-4">
        <button class="btn btn-primary text-white" @click="goBack">Voltar</button>
        <button v-show="isEditable" class="btn btn-success text-white" @click="save">Salvar</button>
        <button class="btn text-white" :class="isEditable ? 'btn-warning' : 'btn-success'" @click="toggleEdit">
          {{ isEditable ? 'Cancelar' : 'Editar' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, toRaw } from 'vue'
import { useRoute } from 'vue-router'
import bookingService from '@/api/services/bookingService'
import { useGlobalStore } from '@/stores/globalStore'
import router from '@/router';
const route = useRoute()
const id = route.params.id

const booking = ref({})
const originalBooking = ref({})
const isEditable = ref(false)
const globalStore = useGlobalStore()

async function getBooking() {
  globalStore.isLoading = true
  try {
    const bookingFromDb = await bookingService.getBookingById(id)
    if (!bookingFromDb) return
    booking.value = bookingFromDb
    originalBooking.value = bookingFromDb
  } catch (error) {
    console.log(error)
  } finally {
    globalStore.isLoading = false
  }
}

async function save() {
  try {
    await bookingService.updateBooking(booking.value)
    getBooking()
  } catch (error) {
    console.log(error)
  }
  isEditable.value = false
}

const toggleEdit = () => {
      if (isEditable.value) {
        const clonedBooking = structuredClone(toRaw(originalBooking.value))

   booking.value = {...clonedBooking}
   console.log(booking.value)
      }
      isEditable.value = !isEditable.value
    }

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getBooking()
})
</script>
