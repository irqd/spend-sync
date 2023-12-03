<template>
   <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="card">
         <div class="card-header text-bg-primary text-center">
            <h3 class="card-title">Forgot Password</h3>
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
            <form @submit.prevent="handleForgotPassword(forgotPasswordForm)">
               <div class="row justify-content-center">
                  <div class="col-12 col-md-7">
                     <small class="form-text">Please provide a valid email</small>
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
                           v-model="forgotPasswordForm.email"
                        >
                        <label for="email">
                           Email address
                        </label>
                        <div class="invalid-feedback">
                           {{ formErrors.email ? formErrors.email[0] : '' }}
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row justify-content-center">
                  <div class="d-grid col-12 col-md-7 mb-3">
                     <button type="submit" class="btn btn-primary">
                        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Send Link
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

const forgotPasswordForm = ref({
   email: '',
});

const formErrors = ref({});

const isLoading = ref(false);

const handleForgotPassword = async (forgotPasswordForm) => {
   try {
      isLoading.value = true;
      await authStore.handleForgotPassword(forgotPasswordForm);

      flashMessageStore.setFlashMessage(
         'success',
         'Password reset link sent to your email'
      );
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