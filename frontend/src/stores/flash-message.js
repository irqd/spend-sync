import { defineStore } from "pinia";

const FlashMessageTypes = {
   INFO: 'info',
   SUCCESS: 'success',
   WARNING: 'warning',
   DANGER: 'danger',
};

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
         try {
            if (!Object.values(FlashMessageTypes).includes(type)) {
               throw new Error('Invalid flash message type.');
            }

            this.flashType = type;
            this.flashMessage = message;
         } catch (error) {
            console.error(error.message);
         }
      },

      clearFlashMessage() {
         this.flashType = null;
         this.flashMessage = null;
      },
   }
});