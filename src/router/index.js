import Vue from 'vue';
import VueRouter from 'vue-router';
import Me from '@/components/Me';
import Kmom01 from '@/components/Kmom01';
import Kmom02 from '@/components/Kmom02';
import Register from '@/components/Register';
import Login from '@/components/Login';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Me',
            component: Me,
        },
        {
            // path: '/reports/week/1',
            path: '/reports/kmom01',
            name: 'Kmom01',
            component: Kmom01,
        },
        {
            // path: '/reports/week/1',
            path: '/reports/kmom02',
            name: 'Kmom02',
            component: Kmom02,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
    ],
});
