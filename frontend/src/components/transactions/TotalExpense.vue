<template>
   <div class="card card-body text-center">
      <h6 class="m-0 pb-1">Expenses</h6>
      <p class="text-danger">
      <span class="fs-5">$ </span>
      <span class="fs-4">{{ expense }}</span>
      </p>
   </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
   expense: {
      type: Number,
      required: true
   }
});
</script>