<template>
   <div class="mt-3">
      <h5>Balance</h5>
      <hr class="m-0 mb-2">
      <p class="text-center">
         <span class="fs-4">$</span>
         <span class="fs-1">{{ balance }}</span>
      </p>
   </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
   balance: {
      type: Number,
      required: true
   }
});
</script>