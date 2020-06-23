import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hra1 from '../views/Hra1.vue'
import Hra2 from '../views/Hra2.vue'
import Vyhledavani from '../views/Vyhledavani.vue'
import TvojeRecepty from '../views/TvojeRecepty.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/hra1',
        name: 'Hra1',
        component: Hra1
    },
    {
        path: '/hra2',
        name: 'Hra2',
        component: Hra2
    },
    {
        path: '/vyhledavani',
        name: 'Vyhledavani',
        component: Vyhledavani
    },
    {
        path: '/tvojeRecepty',
        name: 'TvojeRecepty',
        component: TvojeRecepty
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router