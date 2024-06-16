import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
  const isLoading = ref(false)

  function setIsLoading(newValue){
    isLoading.value = newValue
  }

  return {useGlobalStore, setIsLoading, isLoading}
})
