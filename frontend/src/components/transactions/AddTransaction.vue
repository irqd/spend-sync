<template>
   <div class="mt-3">
      <h5>Add New Transaction</h5>
      <hr class="m-0 mb-2">

      <form @submit.prevent="handleSubmit">
         <div class="mb-3">
            <label for="label" class="form-label fw-medium mb-0">Label</label>
            <input 
               type="text" 
               class="form-control" 
               id="label" 
               placeholder="Enter label"
               v-model="form.label"
               :class="{
                  'is-invalid': formErrors.label
               }"
            >
            <div class="invalid-feedback">
               {{ formErrors.label ? formErrors.label[0] : '' }}
            </div>
         </div>

         <div class="mb-3">
            <label for="amount" class="form-label fw-medium mb-0">Amount</label>
            <br>
            <small class="text-primary"> <strong>Tip:</strong> You can add a negative sign to the amount to indicate an expense.</small>
            <input 
               type="number" 
               class="form-control" 
               id="amount" 
               placeholder="Enter amount"
               v-model="form.amount"
               :class="{
                  'is-invalid': formErrors.amount
               }"
            >
            <div class="invalid-feedback">
               {{ formErrors.amount ? formErrors.amount[0] : '' }}
            </div>
         </div>

         <div class="d-grid gap-2 mb-3">
            <button type="submit" class="btn btn-primary">
               <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
               Submit
            </button>

            <small class="text-success text-center" v-if="successMessage">
               <strong>New transaction added!</strong> 
            </small>
         </div>
      </form>
   </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import axios from 'axios';

const emit = defineEmits(['transactionAdded']);

const form = ref({
   id: null,
   label: '',
   amount: ''
});

const formErrors = ref({});

const isLoading = ref(false);

const successMessage = ref(false);

const resetForm = () => {
   form.value = {
      id: null,
      label: '',
      amount: ''
   };

   formErrors.value = {};
};

const handleSubmit = async () => {
   try {
      isLoading.value = true;
      const response = await axios.post('/api/v1/transaction', form.value);
      resetForm();
      displaySuccessMessage();

      emit('transactionAdded');
   } catch (error) {
      if (error.response.status === 422) {
         formErrors.value = error.response.data.errors;
      }
   } finally {
      isLoading.value = false;
   }
};

const displaySuccessMessage = () => {
   successMessage.value = true;

   setTimeout(() => {
      successMessage.value = false;
   }, 3000);
};

</script>