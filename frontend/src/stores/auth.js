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
   }
});