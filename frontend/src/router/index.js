import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import { useAuthStore } from '../stores/auth';
import { useFlashMessageStore } from '../stores/flash-message';

const authenticatedRoutes = [
  'home',
];

const guestRoutes = [
  'login',
  'register',
  'forgot-password',
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../views/ForgotPassword.vue')
    }
  ]
});

router.beforeEach((to, from) => {
  const authStore = useAuthStore();

  // this will be called for every route change
  // it checks if there is a logged in user and if the route requires authentication
  // if there is no logged in user and the route requires authentication, it will redirect to login
  if (!authStore.isAuthenticated && to.name === 'home') {
    // add a flash message
    const flashMessage = useFlashMessageStore();

    flashMessage.setFlashMessage(
      'warning',
      'You need to be logged in to access that page.'
    );

    return { name: 'login' };
  }

  // if there is a logged in user and the route is guest, it will redirect to home
  if (authStore.isAuthenticated && guestRoutes.includes(to.name)) {
    return { name: 'home' };
  }
});


export default router;
