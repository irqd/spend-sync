<template>
   <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="card">
         <div class="card-header text-bg-primary text-center">
            <h3 class="card-title">Register</h3>
         </div>
         <div 
            v-if="flashMessageStore.show" 
            class="alert alert-danger alert-dismissible rounded-0"
            :class="{
               show: flashMessageStore.message
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
            <form @submit.prevent="handleRegister(registerForm)">
               <div class="row justify-content-center">
                  <div class="col-12 col-md-7">
                     <div class="form-floating mb-3">
                        <input 
                           type="text" 
                           class="form-control"
                           :class="{
                              'is-invalid': formErrors.name
                           }" 
                           id="name" 
                           placeholder="Test User"
                           autocomplete="name"
                           v-model="registerForm.name"
                        >
                        <label for="email">
                           Name
                        </label>
                        <div class="invalid-feedback">
                           {{ formErrors.name ? formErrors.name[0] : '' }}
                        </div>
                     </div>
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
                           v-model="registerForm.email"
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
                           v-model="registerForm.password"
                        >
                        <label for="password">
                           Password
                        </label>
                        <div class="invalid-feedback">
                           {{ formErrors.password ? formErrors.password[0] : '' }}
                        </div>
                     </div>
                     <div class="form-floating mb-3">
                        <input 
                           type="password" 
                           class="form-control"
                           :class="{
                              'is-invalid': formErrors.password_confirmation
                           }" 
                           id="password" 
                           placeholder="confirm password"
                           autocomplete="current-password"
                           v-model="registerForm.password_confirmation"
                        >
                        <label for="password">
                           Confirm Password
                        </label>
                        <div class="invalid-feedback">
                           {{ formErrors.password_confirmation ? formErrors.password_confirmation[0] : '' }}
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row justify-content-center">
                  <div class="d-grid col-12 col-md-7 mb-3">
                     <button type="submit" class="btn btn-primary">
                        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Register
                     </button>
                  </div>
               </div>
            </form>
            <div class="row justify-content-center">
               <div class="col-12 col-md-7">
                  <div class="d-flex justify-content-center gap-2">
                     <p>Got an account?</p>
                     <router-link :to="{
                        name: 'login'
                     }"
                        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                        Login
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
const registerForm = ref({
   name: 'Test User',
   email: 'test@example.com',
   password: 'password',
   password_confirmation: 'password',
   remember_me: true,
});

const formErrors = ref({});

const isLoading = ref(false);

const handleRegister = async (registerForm) => {
   try {
      isLoading.value = true;
      await authStore.handleRegister(registerForm);
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