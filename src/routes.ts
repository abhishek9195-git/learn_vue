import {createRouter, createWebHistory} from 'vue-router'
import Profile from './Profile.vue'
import PageNotFound from './PageNotFound.vue';

const routes = [
    {path: '/profile/:id', component: Profile},
    {path: '/:pathMatch(.*)*', component: PageNotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;