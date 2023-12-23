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
        <div class="card card-body text-center">
          <h6 class="m-0 pb-1">Income</h6>
          <p class="text-success">
            <span class="fs-5">$</span>
            <span class="fs-4">0</span>
          </p>
        </div>
        <div class="card card-body text-center">
          <h6 class="m-0 pb-1">Expenses</h6>
          <p class="text-danger">
            <span class="fs-5">$</span>
            <span class="fs-4">0</span>
          </p>
        </div>
      </div>

      <div class="mt-3">
        <h5>Balance</h5>
        <hr class="m-0 mb-2">
        <p class="text-center">
          <span class="fs-4">$</span>
          <span class="fs-1">0</span>
        </p>
      </div>

      <div class="mt-3">
        <h5>Add New Transaction</h5>
        <hr class="m-0 mb-2">

        <form>
          <div class="mb-3">
            <label for="description" class="form-label fw-medium mb-0">Label</label>
            <input type="text" class="form-control" id="description" placeholder="Enter label">
          </div>
          <div class="mb-3">
            <label for="amount" class="form-label fw-medium mb-0">Amount</label>
            <small> (add negative sign for expenses)</small>
            <input type="number" class="form-control" id="amount" placeholder="Enter amount">
          </div>
          <div class="d-grid gap-2 mb-3">
            <button class="btn btn-primary" type="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <TransactionList :transactions="transactions"/>
  </div>
</template>

<script setup>
import TransactionList from '@/components/transactions/TransactionList.vue';
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
