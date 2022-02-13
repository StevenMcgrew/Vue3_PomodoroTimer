import { createRouter, createWebHistory } from "vue-router"
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import SplashScreen from '../views/SplashScreen.vue'

const routes = [
    {
        path: '/',
        name: 'SplashScreen',
        component: SplashScreen
    },
    {
        path: '/home',
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
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router