import MainPage from '@/pages/MainPage'
import Gallery from '@/pages/Gallery'
import Detail from '@/pages/Detail'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/gallery',
        component: Gallery
    },
    {
        path: '/gallery/:id',
        component: Detail
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;