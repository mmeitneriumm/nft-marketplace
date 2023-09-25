import MainPage from '@/pages/MainPage'
import Gallery from '@/pages/Gallery'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/gallery',
        component: Gallery
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;