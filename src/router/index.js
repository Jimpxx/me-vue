import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from '../store';
import Me from '@/components/Me';
import Kmom01 from '@/components/Kmom01';
import Kmom02 from '@/components/Kmom02';
import Kmom03 from '@/components/Kmom03';
import Reports from '@/components/Reports';
import CreateReport from '@/components/CreateReport';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Admin from '@/components/Admin';
import EditReport from '@/components/EditReport';
import DeleteReport from '@/components/DeleteReport';

Vue.use(VueRouter);

// function isLoggedIn() {

// }

// const isLoggedIn = this.$store.getters.getToken;

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Me',
            component: Me,
        },
        {
            // path: '/reports/week/1',
            path: '/reports/:kmom',
            name: 'Reports',
            component: Reports,
        },
        // {
        //     // path: '/reports/week/1',
        //     path: '/reports/kmom01',
        //     name: 'Kmom01',
        //     component: Kmom01,
        // },
        // {
        //     // path: '/reports/week/1',
        //     path: '/reports/kmom02',
        //     name: 'Kmom02',
        //     component: Kmom02,
        // },
        // {
        //     // path: '/reports/week/1',
        //     path: '/reports/kmom03',
        //     name: 'Kmom03',
        //     component: Kmom03,
        // },
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
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            beforeEnter(to, from, next) {
                if (store.state.token) {
                    next();
                } else {
                    next({
                        path: '/login',
                    });
                }
            },
        },
        {
            // path: '/reports/week/1',
            path: '/reports/create',
            name: 'CreateReport',
            component: CreateReport,
            beforeEnter(to, from, next) {
                if (store.state.token) {
                    next();
                } else {
                    next({
                        path: '/login',
                    });
                }
            },
        },
        {
            // path: '/reports/week/1',
            path: '/reports/edit/:kmom',
            name: 'EditReport',
            component: EditReport,
            beforeEnter(to, from, next) {
                if (store.state.token) {
                    next();
                } else {
                    next({
                        path: '/login',
                    });
                }
            },
        },
        {
            // path: '/reports/week/1',
            path: '/reports/delete/:kmom',
            name: 'EditReport',
            component: DeleteReport,
            beforeEnter(to, from, next) {
                if (store.state.token) {
                    next();
                } else {
                    next({
                        path: '/login',
                    });
                }
            },
        },
    ],
});
