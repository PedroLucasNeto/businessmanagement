import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi } from '@/api/security/loginApi'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('authStore', () => {
  const router = useRouter()
  const isAuthenticated = ref(false)
  const isLoading = ref(false)
  const currentUser = ref(null)

  function setIsAuthenticated(newValue) {
    isAuthenticated.value = newValue
  }

  async function checkAuthentication() {
    const parsedToken = JSON.parse(sessionStorage.getItem('token'))
    if (parsedToken) {
      setCurrentUser(parsedToken)
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
      setCurrentUser(null)
    }
  }

  function setCurrentUser(newValue) {
    currentUser.value = newValue
  }

  async function login(user) {
    try {
      isLoading.value = true
      const { data } = await loginApi.post(`/users/login`, user)
      const token = jwtDecode(data.token)
      setCurrentUser(token)
      sessionStorage.setItem('rawToken', data.token.toString())
      sessionStorage.setItem('token', JSON.stringify(token))
      sessionStorage.setItem('username', token.preferred_username.split(' ')[0])
      setIsAuthenticated(true)
    } catch (error) {
      throw error
    } finally {
      isLoading.value = false
    }
  }

  function loggout() {
    clearSessionStorage()
    isAuthenticated.value = false
    router.push({ name: 'login' })
  }

  function clearSessionStorage() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
  }

  return {
    useAuthStore,
    isAuthenticated,
    setIsAuthenticated,
    login,
    loggout,
    isLoading,
    checkAuthentication,
    setCurrentUser,
    currentUser
  }
})
