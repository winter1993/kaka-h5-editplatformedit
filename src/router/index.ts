import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/edit',
        name: 'Edit',
        meta: {
            title: '编辑',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/edit.vue')
    },
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    // history:createWebHashHistory(import.meta.env.BASE_URL), //前端打包使用createWebHashHistory
    routes
})


export default router