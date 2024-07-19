import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Login from '@/pages/login/Login.vue'
import { useAuthStore } from '@/stores/authStore'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  },
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
        path: '',
        name: 'main',
        component: () => import('@/pages/management/Main.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'budget',
        name: 'budget',
        component: () => import('@/pages/management/components/budget/Budget.vue'),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '',
            name: 'budgetList',
            component: () => import('@/pages/management/components/budget/BudgetList.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'create',
            name: 'createBudget',
            component: () => import('@/pages/management/components/budget/CreateBudget.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'retrieve/:id',
            name: 'retrieveBudget',
            component: () => import('@/pages/management/components/budget/RetrieveBudget.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
      },
      {
        path: 'booking',
        name: 'booking',
        component: () => import('@/pages/management/components/booking/Booking.vue'),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '',
            name: 'bookingList',
            component: () => import('@/pages/management/components/booking/BookingList.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'create',
            name: 'createBooking',
            component: () => import('@/pages/management/components/booking/CreateBooking.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'retrieve/:id',
            name: 'retrieveBooking',
            component: () => import('@/pages/management/components/booking/RetrieveBooking.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
      },

      {
        path: 'client',
        name: 'client',
        component: () => import('@/pages/management/components/client/Client.vue'),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '',
            name: 'clientList',
            component: () => import('@/pages/management/components/client/ClientList.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'retrieve/:id',
            name: 'retrieveClient',
            component: () => import('@/pages/management/components/client/RetrieveClient.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'create',
            name: 'createClient',
            component: () => import('@/pages/management/components/client/CreateClient.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
      },

      {
        path: 'event',
        name: 'event',
        component: () => import('@/pages/management/components/event/Event.vue'),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '',
            name: 'eventList',
            component: () => import('@/pages/management/components/event/EventList.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'create',
            name: 'createEvent',
            component: () => import('@/pages/management/components/event/CreateEvent.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'retrieve/:id',
            name: 'retirieveEvent',
            component: () => import('@/pages/management/components/event/RetrieveEvent.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
      },

      {
        path: 'addon',
        name: 'addon',
        component: () => import('@/pages/management/components/addon/Addon.vue'),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '',
            name: 'addonList',
            component: () => import('@/pages/management/components/addon/AddonList.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'create',
            name: 'createAddon',
            component: () => import('@/pages/management/components/addon/CreateAddon.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'addon/retrieve/:id',
            name: 'retrieveAddon',
            component: () => import('@/pages/management/components/addon/AddonList.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
      },

      {
        path: 'transaction',
        name: 'transaction',
        component: () => import('@/pages/management/components/transaction/Transcation.vue'),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '',
            name: 'transactionList',
            component: () =>
              import('@/pages/management/components/transaction/TranscationList.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'create',
            name: 'createTransaction',
            component: () =>
              import('@/pages/management/components/transaction/CreateTransaction.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'retrieve/:id',
            name: 'retrieveTransaction',
            component: () =>
              import('@/pages/management/components/transaction/RetrieveTransaction.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
      },

      {
        path: 'category',
        name: 'category',
        component: () => import('@/pages/management/components/category/Category.vue'),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '',
            name: 'categoryList',
            component: () => import('@/pages/management/components/category/CategoryList.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'create',
            name: 'createCategory',
            component: () => import('@/pages/management/components/category/CreateCategory.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'retrieve/:id',
            name: 'retrieveCategory',
            component: () => import('@/pages/management/components/category/RetrieveCategory.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
      },

      {
        path: 'pricing',
        name: 'pricing',
        component: () => import('@/pages/management/components/pricing/Pricing.vue'),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '',
            name: 'pricingList',
            component: () => import('@/pages/management/components/pricing/PricingList.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'create',
            name: 'createPricing',
            component: () => import('@/pages/management/components/pricing/CreatePricing.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'retrieve/:id',
            name: 'retrievePricing',
            component: () => import('@/pages/management/components/pricing/RetrievePricing.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
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
