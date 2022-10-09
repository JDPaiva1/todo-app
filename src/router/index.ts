import { createRouter, createWebHistory } from 'vue-router'
import AllView from '../views/AllView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all',
      alias: ['/all'],
      component: AllView
    },
    {
      path: '/active',
      name: 'active',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ActiveView.vue')
    },
    {
      path: '/completed',
      name: 'completed',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CompletedView.vue')
    }
  ]
})

export default router
