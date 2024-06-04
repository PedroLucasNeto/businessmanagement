import axios from 'axios'

const BASE_URL = 'http://localhost:3000';


async function getAllProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
}

async function getProductById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting product with ID ${id}:`, error);
    throw error;
  }
}

async function createProduct(product) {
  try {
    const response = await axios.post(`${BASE_URL}/products`, product);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

async function updateProductById(id, product) {
  try {
    const response = await axios.put(`${BASE_URL}/products/${id}`, product);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error);
    throw error;
  }
}

async function deleteProductById(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
}

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};