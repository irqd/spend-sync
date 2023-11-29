import { defineStore } from "pinia";

const FlashMessageTypes = {
   INFO: 'info',
   SUCCESS: 'success',
   WARNING: 'warning',
   DANGER: 'danger',
};

export const useFlashMessageStore = defineStore("flashMessage", {
   state: () => ({
      flashShow: false,
      flashType: null, // success, error, warning, info
      flashMessage: null,
   }),

   getters: {
      show: (state) => state.flashShow,
      type: (state) => state.flashType,
      message: (state) => state.flashMessage,
   },

   actions: {
      setFlashMessage(type, message, show = true) {
         try {
            if (!Object.values(FlashMessageTypes).includes(type)) {
               throw new Error('Invalid flash message type.');
            }

            this.flashType = type;
            this.flashMessage = message;
            this.flashShow = show;
         } catch (error) {
            console.error(error.message);
         }
      },

      clearFlashMessage() {
         this.flashShow = false;
      },
   }
});