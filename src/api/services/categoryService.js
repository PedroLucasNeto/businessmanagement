import { api } from '../index'

async function createCategory(category) {
  try {
    await api.post('/categories', category)
  } catch (error) {
    console.log(error)
  }
}

async function getAllCategories() {
  try {
    const { data } = await api.get('/categories')
    return data
  } catch (error) {
    console.log(error)
  }
}

async function getById(id) {
  try {
    const data = await api.get(`/categories/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

async function updateCategory(id, category) {
  try {
    // Lógica para atualizar a categoria
  } catch (error) {
    console.log(error)
  }
}

async function deleteCategoryById(id) {
  try {
    await api.delete(`/categories/fromdb/${id}`)
  } catch (error) {
    console.log(error)
  }
}

const categoryService = {
  createCategory,
  getAllCategories,
  getById,
  updateCategory,
  deleteCategoryById
}

export default categoryService
