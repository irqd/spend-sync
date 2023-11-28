<template>
  <header>
    <NavBar />
  </header>

  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
</script>
