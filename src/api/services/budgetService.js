import { api } from '../index'

async function createBudget(budget) {
  try {
    const response = await api.post('/budgets', budget)
    return response
  } catch (error) {
    console.log(error)
  }
}

async function getAllBudgets() {
  try {
    const { data } = await api.get('/budgets')
    return data
  } catch (error) {
    console.log(error)
  }
}

async function getById(id) {
  try {
    const data = await api.get(`/budgets/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

async function updateBudget(id, budget) {
  try {
    // Lógica para atualizar o orçamento
  } catch (error) {
    console.log(error)
  }
}

async function deleteBudgetById(id) {
  try {
    await api.delete(`/budgets/fromdb/${id}`)
  } catch (error) {
    console.log(error)
  }
}

const servicoOrcamento = {
  createBudget,
  getAllBudgets,
  getById,
  updateBudget,
  deleteBudgetById
}

export default servicoOrcamento
