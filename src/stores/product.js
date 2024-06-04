import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', () => {
  const product = ref({})
  function setProduct (newProduct){
    product.value = newProduct
  }

  return { product, setProduct }
})
