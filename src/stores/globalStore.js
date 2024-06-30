import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
  const isLoading = ref(false)
  const tableBusy = ref(false)
  const theme = ref('light')
  const menuOpen = ref(false)

  function setIsLoading(newValue) {
    isLoading.value = newValue
  }

  function setTableBusy(newValue) {
    tableBusy.value = newValue
  }

  function setTheme(newValue) {
    theme.value = newValue
  }

  function toggleMenu() {
    menuOpen.value = !menuOpen.value
  }

  return {
    useGlobalStore,
    setIsLoading,
    isLoading,
    tableBusy,
    setTableBusy,
    theme,
    setTheme,
    menuOpen,
    toggleMenu
  }
})
