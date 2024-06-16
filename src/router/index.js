import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Login from '@/pages/login/Login.vue'
import { useAuthStore } from '@/stores/authStore'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('@/pages/calendar/Calendar.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/management',
    name: 'management',
    component: () => import('@/pages/management/Management.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'budget',
        name: 'budget',
        component: () => import('@/pages/management/components/budget/Budget.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'booking',
        name: 'booking',
        component: () => import('@/pages/management/components/booking/Booking.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'client',
        name: 'client',
        component: () => import('@/pages/management/components/client/Client.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'event',
        name: 'event',
        component: () => import('@/pages/management/components/event/Event.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'addon',
        name: 'addon',
        component: () => import('@/pages/management/components/addon/Addon.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'transaction',
        name: 'transaction',
        component: () => import('@/pages/management/components/transaction/Transcation.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/pages/management/components/category/Category.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'pricing',
        name: 'pricing',
        component: () => import('@/pages/management/components/pricing/Pricing.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const authStore = useAuthStore()

  authStore.checkAuthentication()
  const isAuthenticated = authStore.isAuthenticated

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    if (to.name === 'login' && isAuthenticated) {
      next({ name: 'home' })
    }
    next()
  }
})

export default router
