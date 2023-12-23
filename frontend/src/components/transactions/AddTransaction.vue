<template>
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
</template>

<script setup>

</script>