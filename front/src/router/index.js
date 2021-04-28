import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import Stop from '../views/Stop.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  // {
  //   path: '/',
  //   name: 'stop',
  //   component: Stop,
  // },
  {
    path: '/report',
    name: 'report',
    component: () => import('../views/Report.vue')
  },
  {
    path: '/rebuild',
    name: 'rebuild',
    component: () => import('../views/Rebuild.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
