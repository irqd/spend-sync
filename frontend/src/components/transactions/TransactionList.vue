<template>
   <div class="col-12 col-md-4">
      <h5 class="m-0 pb-1">Recent Transactions</h5>
      <div class="bg-primary p-1 mb-2">
      </div>
      
      <div class="d-flex flex-column gap-3" v-if="transactions.length != 0">
         <div class="card" v-for="transaction in transactions" :key="transaction.id" >
            <div class="card-body p-2 d-flex justify-content-between align-items-center">
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
                  <button class="btn btn-primary btn-sm me-1">
                     <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btn btn-danger btn-sm">
                     <i class="fa-solid fa-trash"></i>
                  </button>
               </div>
            </div>
         </div>
      </div>

      <div class="d-flex justify-content-center align-items-center" v-else>
        <p class="text-muted m-0">No transactions yet</p>
      </div>
   </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
   transactions: {
      type: Array,
      required: true
   }
});

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