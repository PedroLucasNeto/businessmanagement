import { api } from '../index'

async function createAddon(addon) {
  try {
    await api.post('/addons', addon)
  } catch (error) {
    console.log(error)
  }
}

async function getAllAddons() {
  try {
    const { data } = await api.get('/addons')
    return data
  } catch (error) {
    console.log(error)
  }
}

async function getById(id) {
  try {
    const data = await api.get(`/addons/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

async function updateAddon(id, addon) {
  try {
    // Lógica para atualizar o produto
  } catch (error) {
    console.log(error)
  }
}

async function deleteAddonById(id) {
  try {
    await api.delete(`/addons/fromdb/${id}`)
  } catch (error) {
    console.log(error)
  }
}

const addonService = {
  createAddon,
  getAllAddons,
  getById,
  updateAddon,
  deleteAddonById
}

export default addonService
