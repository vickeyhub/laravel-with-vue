import { createWebHistory, createRouter } from "vue-router";
import home from './pages/Home.vue';
import login from './pages/login.vue';
import register from './pages/register.vue';

const routes = [
    {
        path: '/admin/',
        name: 'Home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;