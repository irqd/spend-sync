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
      component: Home,
      // doing this doesn't make that weird thing in which it shows the content in home page
      // because authStore doesn't return a promise yet.
      beforeEnter: async (to, from) => {
        const authStore = useAuthStore();
        
        await authStore.getUser();

        if(!authStore.isAuthenticated && authenticatedRoutes.includes(to.name)) {
          const flashMessageStore = useFlashMessageStore();

          flashMessageStore.setFlashMessage(
            'danger', 
            'You must be logged in to view that page.'
          );
            
          return { name: 'login' };
        }
      }
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

// change this to per component navigation guards
// this is very inefficient, as it calls the getUser() method
// on every route change, even if the user is already logged in
// router.beforeEach(async (to, from) => {
  
//   await authStore.getUser();

//   if(!authStore.isAuthenticated && authenticatedRoutes.includes(to.name)) {
//     const flashMessageStore = useFlashMessageStore();

//     flashMessageStore.setFlashMessage(
//       'danger', 
//       'You must be logged in to view that page.'
//     );
      
//     return { name: 'login' };
//   }

//   if(authStore.isAuthenticated && guestRoutes.includes(to.name)) {  
//     return { name: 'home' };
//   }
// });


export default router;
