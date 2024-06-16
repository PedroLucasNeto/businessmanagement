import { api } from '../index'

async function createPricing(pricing) {
  try {
    await api.post('/pricings', pricing)
  } catch (error) {
    console.log(error)
  }
}

async function getAllPricings() {
  try {
    const { data } = await api.get('/pricings')
    return data
  } catch (error) {
    console.log(error)
  }
}

async function getById(id) {
  try {
    const data = await api.get(`/pricings/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

async function updatePricing(id, pricing) {
  try {
    // Lógica para atualizar o preço
    await api.put(`/pricings/${id}`, pricing)
  } catch (error) {
    console.log(error)
  }
}

async function deletePricingById(id) {
  try {
    await api.delete(`/pricings/fromdb/${id}`)
  } catch (error) {
    console.log(error)
  }
}

const pricingService = {
  createPricing,
  getAllPricings,
  getById,
  updatePricing,
  deletePricingById
}

export default pricingService
