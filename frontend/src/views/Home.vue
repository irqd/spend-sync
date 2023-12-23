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
            <span class="fs-4">$</span>
            <span class="fs-1">0</span>
          </p>
        </div>
        <div class="card card-body text-center">
          <h6 class="m-0 pb-1">Expenses</h6>
          <p class="text-danger">
            <span class="fs-4">$</span>
            <span class="fs-1">0</span>
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
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <h5 class="m-0 pb-1">Recent Transactions</h5>
      <div class="bg-primary p-1 mb-2">
      </div>
      
      <div class="d-flex flex-column gap-3">
        <div class="card">
          <div class="card-body p-2 d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center gap-2">
              <div>
                <h6 class="m-0">Salary</h6>
                <small class="text-muted">2021-09-01</small>
              </div>
              <div class="vr"></div>
              <div>
                <p class="m-0 text-success">
                  <span class="fs-6 fw-bold">$</span>
                  <span class="fs-4">0</span>
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

        <div class="card">
          <div class="card-body p-2 d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center gap-2">
              <div>
                <h6 class="m-0">Salary</h6>
                <small class="text-muted">2021-09-01</small>
              </div>
              <div class="vr"></div>
              <div>
                <p class="m-0 text-success">
                  <span class="fs-6 fw-bold">$</span>
                  <span class="fs-4">0</span>
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

        <div class="card">
          <div class="card-body p-2 d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center gap-2">
              <div>
                <h6 class="m-0">Salary</h6>
                <small class="text-muted">2021-09-01</small>
              </div>
              <div class="vr"></div>
              <div>
                <p class="m-0 text-success">
                  <span class="fs-6 fw-bold">$</span>
                  <span class="fs-4">0</span>
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

        <div class="card">
          <div class="card-body p-2 d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center gap-2">
              <div>
                <h6 class="m-0">Salary</h6>
                <small class="text-muted">2021-09-01</small>
              </div>
              <div class="vr"></div>
              <div>
                <p class="m-0 text-success">
                  <span class="fs-6 fw-bold">$</span>
                  <span class="fs-4">0</span>
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

        <div class="card">
          <div class="card-body p-2 d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center gap-2">
              <div>
                <h6 class="m-0">Salary</h6>
                <small class="text-muted">2021-09-01</small>
              </div>
              <div class="vr"></div>
              <div>
                <p class="m-0 text-success">
                  <span class="fs-6 fw-bold">$</span>
                  <span class="fs-4">0</span>
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
    </div>
  </div>
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
