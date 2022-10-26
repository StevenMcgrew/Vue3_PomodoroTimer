import { createRouter, createWebHashHistory } from "vue-router"
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router