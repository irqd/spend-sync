<template>
   <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="card">
         <div class="card-header text-bg-primary text-center">
            <h3 class="card-title">Login</h3>
         </div>
         <div 
            v-if="flashMessageStore.show" 
            class="alert alert-dismissible rounded-0"
            :class="{
               show: flashMessageStore.message,
               'alert-danger': flashMessageStore.type === 'danger',
               'alert-success': flashMessageStore.type === 'success',
               'alert-warning': flashMessageStore.type === 'warning',
               'alert-info': flashMessageStore.type === 'info',
            }"
            role="alert"
            >
            <strong>Notice!</strong> {{ flashMessageStore.message }}
            <!-- data-bs-dismiss="alert" causing some errors, had to be removed -->
            <button 
               type="button" 
               class="btn-close" 
               aria-label="Close"
               @click="flashMessageStore.clearFlashMessage"
            ></button>
         </div>
         <div class="card-body shadow-sm">
            <form @submit.prevent="handleLogin(loginForm)">
               <div class="row justify-content-center">
                  <div class="col-12 col-md-7">
                     <div class="form-floating mb-3">
                        <input 
                           type="email" 
                           class="form-control"
                           :class="{
                              'is-invalid': formErrors.email
                           }" 
                           id="email" 
                           placeholder="name@example.com"
                           autocomplete="email"
                           v-model="loginForm.email"
                        >
                        <label for="email">
                           Email address
                        </label>
                        <div class="invalid-feedback">
                           {{ formErrors.email ? formErrors.email[0] : '' }}
                        </div>
                     </div>
                     <div class="form-floating mb-3">
                        <input 
                           type="password" 
                           class="form-control"
                           :class="{
                              'is-invalid': formErrors.password
                           }" 
                           id="password" 
                           placeholder="password"
                           autocomplete="current-password"
                           v-model="loginForm.password"
                        >
                        <label for="password">
                           Password
                        </label>
                        <div class="invalid-feedback">
                           {{ formErrors.password ? formErrors.password[0] : '' }}
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row justify-content-center">
                  <div class="col-7 mb-3">
                     <div class="d-flex justify-content-between">
                        <div class="form-check">
                           <input 
                              class="form-check-input" 
                              type="checkbox" 
                              id="remember_me"
                              v-model="loginForm.remember_me"
                           >
                           <label class="form-check-label text-primary" for="remember_me">
                              Remember me
                           </label>
                        </div>
                        <router-link :to="{
                           name: 'forgot-password'
                        }"
                           class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                           Forgot password?
                        </router-link>
                     </div>
                  </div>
               </div>
               <div class="row justify-content-center">
                  <div class="d-grid col-12 col-md-7 mb-3">
                     <button type="submit" class="btn btn-primary">
                        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Login
                     </button>
                  </div>
               </div>
            </form>
            <div class="row justify-content-center">
               <div class="col-12 col-md-7">
                  <div class="d-flex justify-content-center gap-2">
                     <p>No account?</p>
                     <router-link :to="{
                        name: 'register'
                     }"
                        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                        Register
                     </router-link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useFlashMessageStore } from '@/stores/flash-message';
import { useAuthStore } from '@/stores/auth';

const flashMessageStore = useFlashMessageStore();
const authStore = useAuthStore();

// default login credentials are provided for convenience
const loginForm = ref({
   email: 'test@example.com',
   password: 'password',
   remember_me: true,
});

const formErrors = ref({});

const isLoading = ref(false);

const handleLogin = async (loginForm) => {
   try {
      isLoading.value = true;
      await authStore.handleLogin(loginForm);
   } catch (error) {
      if (error.response.status === 422) {
         formErrors.value = error.response.data.errors;
      } else {
         flashMessageStore.setFlashMessage(
            'danger',
            error.response.data.message
         );
      }
   } finally {
      isLoading.value = false;
   }
};
</script>

<style scoped>
.card {
   width: 50%;
}

@media (max-width: 768px) {
   .card {
      width: 100%;
   }
}
</style>