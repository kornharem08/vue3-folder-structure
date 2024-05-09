import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/about.vue'
import HomeView from '../views/home.vue'
import ProductView from '../views/product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
  ]
})

export default router