import Vue from 'vue';
import VueRouter from 'vue-router';
import Me from '@/components/Me';
import Report from '@/components/Report';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Me',
            component: Me,
        },
        {
            path: '/reports/week/1',
            name: 'Report',
            component: Report,
        },
    ],
});