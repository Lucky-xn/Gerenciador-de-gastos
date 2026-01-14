import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import UserProfileView from '@/views/UserProfileView.vue';

const routes = [
  { path: '/Home', name: 'home', component: HomeView },
  { path: '/Profile', name: 'profile', component: UserProfileView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
