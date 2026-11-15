import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Product from './Product.vue'
import Order from './Order.vue'
import User from './User.vue'
import App from './App.vue'

const routes = [
    // {path: '/', component: App},
    {path: '/home', component: Home},
    {path: '/user', component: User},
    {path: '/product', component: Product},
    {path: '/order', component: Order}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router