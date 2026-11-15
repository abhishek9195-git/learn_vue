import {createRouter, createWebHistory} from 'vue-router'
import Profile from './Profile.vue'

const routes = [
    {path: '/profile/:id', component: Profile}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;