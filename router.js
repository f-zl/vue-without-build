import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.js'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/p/:pageNo',
            component: HomeView
        }
    ]
})
