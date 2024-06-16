import { api } from '../index'

async function createClient(client) {
  try {
    await api.post('/clients', client)
  } catch (error) {
    console.log(error)
  }
}

async function getAllClients() {
  try {
    const { data } = await api.get('/clients')
    return data
  } catch (error) {
    console.log(error)
  }
}

async function getAllClientsActivated() {
  try {
    const { data } = await api.get('/clients/activated')
    return data
  } catch (error) {
    console.log(error)
  }
}

async function getAllClientsDeactivated() {
  try {
    const { data } = await api.get('/clients/deactivated')
    return data
  } catch (error) {
    console.log(error)
  }
}

async function getById(id) {
  try {
    const { data } = await api.get(`/clients/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

async function updateClient(id, client) {
  try {
    // Lógica para atualizar o cliente
  } catch (error) {
    console.log(error)
  }
}

async function deleteClientById(id) {
  try {
    await api.delete(`/clients/fromdb/${id}`)
  } catch (error) {
    console.log(error)
  }
}

const clientService = {
  createClient,
  getAllClients,
  getById,
  updateClient,
  deleteClientById,
  getAllClientsDeactivated,
  getAllClientsActivated
}

export default clientService
