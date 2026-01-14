import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import UserProfileView from '@/views/UserProfileView.vue';
import TransactionHistoryComponent from '@/components/TransactionHistoryComponent.vue';
import ChartsViews from '@/views/ChartsViews.vue';
import UserPersonalDataView from '@/views/UserPersonalDataView.vue';

const routes = [
  { path: '/Home', name: 'home', component: HomeView },

  { path: '/Profile', name: 'profile', component: UserProfileView },
  {
    path: '/Profile/Personal',
    name: 'personal data',
    component: UserPersonalDataView,
  },

  { path: '/History', name: 'history', component: TransactionHistoryComponent },
  { path: '/Charts', name: 'charts', component: ChartsViews },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
