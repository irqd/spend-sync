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

         try {
            await axios.post('/login', {
               email: form.email,
               password: form.password,
            });

            await this.getUser();

            this.router.push({ name: "home" });
         } catch (error) {
            console.log(error);
         }
      },

      async handleLogout() {
         await axios.post('/logout');

         this.authUser = null;

         this.router.push({ name: "login" });
      }
   }
});