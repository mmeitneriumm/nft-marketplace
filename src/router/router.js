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
        path: '/gallery/:name/',
        component: Gallery,
        // children: [
        //     {
        //         path: 'detail/:id',
        //         component: Detail
        //     }
        // ],
    },
    {
        path: '/gallery/:name/detail/:id',
        name: 'Detail',
        component: Detail
      }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;