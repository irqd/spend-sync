<template>
   <div class="card card-body text-center">
      <h6 class="m-0 pb-1">Income</h6>
      <p class="text-success">
      <span class="fs-5">$ </span>
      <span class="fs-4">{{ income }}</span>
      </p>
   </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
   income: {
      type: Number,
      required: true
   }
});
</script>