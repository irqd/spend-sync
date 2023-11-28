import { defineStore } from "pinia";

export const useFlashMessageStore = defineStore("flashMessage", {
   state: () => ({
      flashType: null, // success, error, warning, info
      flashMessage: null,
   }),

   getters: {
      type: (state) => state.flashType,
      message: (state) => state.flashMessage,
   },

   actions: {
      setFlashMessage(type, message) {
         this.flashType = type;
         this.flashMessage = message;
      },

      clearFlashMessage() {
         this.flashType = null;
         this.flashMessage = null;
      },
   }
});