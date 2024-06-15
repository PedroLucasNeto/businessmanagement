import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Login from '@/pages/login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/management',
      name: 'management',
      component: () => import('@/pages/management/Management.vue'),
      children: [
        {
          path: 'calendar',
          name: 'calendar',
          component: () => import('@/pages/management/components/calendar/Calendar.vue')
        },
        {
          path: 'budget',
          name: 'budget',
          component: () => import('@/pages/management/components/budget/Budget.vue')
        },
        {
          path: 'booking',
          name: 'booking',
          component: () => import('@/pages/management/components/booking/Booking.vue')
        },
        {
          path: 'client',
          name: 'client',
          component: () => import('@/pages/management/components/client/Client.vue')
        },
        {
          path: 'event',
          name: 'event',
          component: () => import('@/pages/management/components/event/Event.vue')
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('@/pages/management/components/product/Product.vue')
        },
        {
          path: 'transaction',
          name: 'transaction',
          component: () => import('@/pages/management/components/transaction/Transcation.vue')
        },
        {
          path: 'category',
          name: 'category',
          component: () => import('@/pages/management/components/category/Category.vue')
        },
        {
          path: 'pricing',
          name: 'pricing',
          component: () => import('@/pages/management/components/pricing/Pricing.vue')
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
