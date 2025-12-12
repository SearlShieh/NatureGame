import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/nightmare',
    component: () => import('@/views/Nightmare/index.vue'),
  },
  {
    path: '/sixgame',
    component: () => import('@/views/SixGame/index.vue'),
  },
  {
    path: '/filetobase64',
    component: () => import('@/views/FileToBase64/index.vue'),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach(() => {});

export default router;
