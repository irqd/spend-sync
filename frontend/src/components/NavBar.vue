<template>
   <nav class="navbar navbar-expand-lg text-bg-primary" data-bs-theme="dark">
      <div class="container">
         <a class="navbar-brand h3 mt-2" href="#">Spend Sync</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
               <li class="nav-item">
                  <router-link 
                     :to="{
                        name: 'home'
                     }" 
                     class="nav-link"
                     :class="activeClass('home')"
                  >
                     Home
                  </router-link>
               </li>
            </ul>
            <ul class="navbar-nav" v-if="!authStore.isAuthenticated">
               <li class="nav-item">
                  <router-link 
                     :to="{
                        name: 'login'
                     }" 
                     class="nav-link"
                     :class="activeClass('login')"
                  >
                     Login
                  </router-link>
               </li>
               <li class="nav-item">
                  <router-link 
                     :to="{
                        name: 'register'
                     }" 
                     class="nav-link"
                     :class="activeClass('register')"
                  >
                     Register
                  </router-link>
               </li>
            </ul>

            <ul class="navbar-nav" v-else>
               <li class="nav-item">
                  <a type="button" class="nav-link" @click="authStore.handleLogout">
                     Logout
                  </a>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

const route = useRoute();

const activeClass = (name) => {
   return {
      active: route.name === name
   }
}
</script>