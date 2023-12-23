<template>
   <div class="col-12 col-md-4">
      <h5 class="m-0 pb-1">Recent Transactions</h5>
      <div class="bg-primary p-1 mb-2">
      </div>

      <div class="d-flex flex-column gap-3" v-if="transactions.length != 0">
         <div class="card" v-for="transaction in transactions" :key="transaction.id">
            <div class="card-body p-2 d-flex justify-content-between align-items-center"
               v-if="!transaction.isEditFormVisible">
               <div class="d-flex justify-content-between align-items-center gap-2">
                  <div>
                     <h6 class="m-0">{{ transaction.label }}</h6>
                     <small class="text-muted">{{ formatDate(transaction.created_at) }}</small>
                  </div>
                  <div class="vr"></div>
                  <div>
                     <p class="m-0" :class="{
                        'text-success': transaction.amount > 0,
                        'text-danger': transaction.amount < 0
                     }">
                        <span class="fs-6 fw-bold">$ </span>
                        <span class="fs-4">{{ transaction.amount }}</span>
                     </p>
                  </div>
               </div>

               <div>
                  <button class="btn btn-primary btn-sm me-1" @click="toggleEditForm(transaction.id)">
                     <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btn btn-danger btn-sm" @click="deleteTransaction(transaction.id)">
                     <span v-if="transaction.isLoading" class="spinner-border spinner-border-sm" role="status"
                        aria-hidden="true"></span>
                     <i class="fa-solid fa-trash" v-else></i>
                  </button>
               </div>
            </div>

            <form @submit.prevent="handleUpdate" v-else>
               <div class="card-body p-2 d-flex justify-content-between align-items-center gap-2">
                  <div class="row gx-2">
                     <div class="col">
                        <input type="text" class="form-control form-control-sm" placeholder="Label" aria-label="Label"
                           v-model="form.label">
                     </div>
                     <div class="col">
                        <input type="number" class="form-control form-control-sm" placeholder="Amount" aria-label="Amount"
                           v-model="form.amount">
                     </div>
                  </div>

                  <button class="btn btn-primary btn-sm">
                     <span v-if="transaction.isLoading" class="spinner-border spinner-border-sm" role="status"
                        aria-hidden="true"></span>
                     <i class="fa-solid fa-check" v-else></i>
                  </button>
               </div>
            </form>

         </div>
      </div>

      <div class="d-flex justify-content-center align-items-center" v-else>
         <p class="text-muted m-0">No transactions yet</p>
      </div>
   </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import axios from 'axios';

const emit = defineEmits(['transactionUpdateOrDelete']);

const props = defineProps({
   transactions: {
      type: Array,
      required: true
   }
});

const form = ref({
   id: null,
   label: '',
   amount: ''
});

const formErrors = ref({});

const resetForm = () => {
   form.value = {
      id: null,
      label: '',
      amount: ''
   };

   formErrors.value = {};
};

const toggleEditForm = (id) => {
   const transaction = props.transactions.find(t => t.id === id);
   transaction.isEditFormVisible = true;
   
   form.value = {
      id: transaction.id,
      label: transaction.label,
      amount: transaction.amount
   };
}

const toggleLoading = (id) => {
   const transaction = props.transactions.find(t => t.id === id);
   transaction.isLoading = !transaction.isLoading;
}

const deleteTransaction = async (id) => {
   toggleLoading(id);

   try {
      await axios.delete(`/api/v1/transaction/${id}`);
      emit('transactionUpdateOrDelete');
   } catch (error) {
      console.log(error);
   } finally {
      toggleLoading(id);
   }
}

const handleUpdate = async () => {
   toggleLoading(form.value.id);

   try {
      await axios.put(`/api/v1/transaction/${form.value.id}`, form.value);
      resetForm();
      emit('transactionUpdateOrDelete');
   } catch (error) {
      if (error.response.status === 422) {
         formErrors.value = error.response.data.errors;
      }
   } finally {
      toggleLoading(form.value.id);
   }
};


const formatDate = (date) => {
   const formattedDate = new Date(date).toLocaleDateString(
      'en-US',
      {
         month: 'short',
         day: 'numeric',
         year: 'numeric'
      }
   );

   return formattedDate;
}
</script>