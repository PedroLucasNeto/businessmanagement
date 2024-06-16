import { api } from '../index'

async function createTransaction(transaction) {
  try {
    await api.post('/transactions', transaction)
  } catch (error) {
    console.log(error)
  }
}

async function getAllTransactions() {
  try {
    const { data } = await api.get('/transactions')
    return data
  } catch (error) {
    console.log(error)
  }
}

async function getById(id) {
  try {
    const { data } = await api.get(`/transactions/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

async function updateTransaction(id, transaction) {
  try {
    await api.put(`/transactions/${id}`, transaction)
  } catch (error) {
    console.log(error)
  }
}

async function deleteTransactionById(id) {
  try {
    await api.delete(`/transactions/fromdb/${id}`)
  } catch (error) {
    console.log(error)
  }
}

const transactionService = {
  createTransaction,
  getAllTransactions,
  getById,
  updateTransaction,
  deleteTransactionById
}

export default transactionService
