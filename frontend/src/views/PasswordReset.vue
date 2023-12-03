<template>
   <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="card">
         <div class="card-header text-bg-primary text-center">
            <h3 class="card-title">Password Reset</h3>
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
            <form @submit.prevent="handlePasswordReset(resetPasswordForm)">
               <div class="row justify-content-center">
                  <div class="col-12 col-md-7">
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
                           v-model="resetPasswordForm.password"
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
                           id="password_confirmation" 
                           placeholder="confirm password"
                           autocomplete="current-password"
                           v-model="resetPasswordForm.password_confirmation"
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
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useFlashMessageStore } from '@/stores/flash-message';
import { useAuthStore } from '@/stores/auth';

const currentRoute = useRoute();
const flashMessageStore = useFlashMessageStore();
const authStore = useAuthStore();

// default login credentials are provided for convenience
const resetPasswordForm = ref({
   token: currentRoute.params.token,
   email: currentRoute.query.email,
   password: '',
   password_confirmation: '',
});

const formErrors = ref({});

const isLoading = ref(false);

const handlePasswordReset = async (resetPasswordForm) => {
   try {
      isLoading.value = true;
      await authStore.handlePasswordReset(resetPasswordForm);

      flashMessageStore.setFlashMessage(
         'success',
         'Password reset successfully, please login.'
      );
   } catch (error) {
      console.log(error.response.data.errors);
      if (error.response.status === 422 && error.response.data.errors.password) {
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