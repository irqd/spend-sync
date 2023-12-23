<template>
  <div class="row justify-content-center mt-5 mb-3">
    <div class="col-12 col-md-8">
      <h3 class="m-0 pb-1">Expense Tracker</h3>
      <div class="bg-primary p-1">
      </div>
    </div>
  </div>
  <div class="row justify-content-center gap-0 mb-5">
    <div class="col-12 col-md-4">
      <div class="d-flex justify-content-center align-items-center gap-1">
        <TotalIncome :income="totalIncome"/>
        <TotalExpense :expense="totalExpense"/>
      </div>

      <TotalBalance :balance="totalBalance"/>
      <AddTransaction />  
    </div>
    <TransactionList :transactions="transactions"/>
  </div>
</template>

<script setup>
import TransactionList from '@/components/transactions/TransactionList.vue';
import TotalBalance from '@/components/transactions/TotalBalance.vue';
import TotalExpense from '@/components/transactions/TotalExpense.vue';
import TotalIncome from '@/components/transactions/TotalIncome.vue';
import AddTransaction from '@/components/transactions/AddTransaction.vue';

import { onMounted, ref } from 'vue';
import axios from "axios";

const transactions = ref([]);
const totalIncome = ref(0);
const totalExpense = ref(0);
const totalBalance = ref(0);

const fetchTransactions = async () => {
  try {
    const response = await axios.get('/api/v1/transaction');
    transactions.value = response.data.data;
    totalIncome.value = response.data.totalIncome;
    totalExpense.value = response.data.totalExpense;
    totalBalance.value = response.data.totalBalance;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchTransactions();
});
</script>
