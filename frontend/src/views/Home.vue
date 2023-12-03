<template>
  {{ transactions.message }}
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from "axios";

const transactions = ref([]);

const fetchTransactions = async () => {
  try {
    const response = await axios.get('/api/v1/transaction');
    transactions.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchTransactions();
});
</script>
