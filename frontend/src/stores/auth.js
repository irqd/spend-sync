import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
   state: () => ({
      authUser: null,
   }),

   getters: {
      isAuthenticated: (state) => !!state.authUser,
      user: (state) => state.authUser,
   },

   actions: {
      async getCsrfToken() {
         try {
            await axios.get("/sanctum/csrf-cookie");
         } catch (error) {
            console.log(error);
         }
      },

      async getUser() {
         try {
            const { data } = await axios.get("/api/user");
            this.authUser = data;
         } catch (error) {
            console.log(error);
         }
      },

      async handleLogin(form) {
         await this.getCsrfToken();

         await axios.post('/login', {
            email: form.email,
            password: form.password,
         });

         await this.getUser();

         this.router.push({ name: "home" });
      },

      async handleRegister(form) {
         await this.getCsrfToken();

         await axios.post('/register', {
            name: form.name,
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirmation,
         });

         await this.getUser();

         this.router.push({ name: "home" });
      },

      async handleForgotPassword(form) {
         await this.getCsrfToken();

         await axios.post('/forgot-password', {
            email: form.email,
         });
      },

      async handlePasswordReset(form) {
         await this.getCsrfToken();

         await axios.post('/reset-password', {
            token: form.token,
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirmation,
         });

         // await this.getUser();

         this.router.push({ name: "login" });
      },

      async handleLogout() {
         await axios.post('/logout');

         this.authUser = null;

         this.router.push({ name: "login" });
      }
   }
});