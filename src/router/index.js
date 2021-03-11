import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import FavoritesList from '../views/FavoritesList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoritesList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
