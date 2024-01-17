import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/home/HomePage.vue';
import ArticlePage from '../pages/article/ArticlePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticlePage,
    },
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' });
      }, 500);
    });
  },
});
export default router;
