import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
  const isLoading = ref(false)
  const tableBusy = ref(false)

  function setIsLoading(newValue) {
    isLoading.value = newValue
  }

  function setTableBusy(newValue) {
    tableBusy.value = newValue
  }

  return { useGlobalStore, setIsLoading, isLoading, tableBusy, setTableBusy }
})
