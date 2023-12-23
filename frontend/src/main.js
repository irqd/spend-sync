import 'bootswatch/dist/materia/bootstrap.min.css';
import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import './axios';

import App from './App.vue';

const pinia = createPinia();

// This is the magic that makes the router work with Pinia
pinia.use(({ store }) => {
   store.router = markRaw(router);
});

const app = createApp(App);
app.use(pinia);
app.use(router);

app.mount('#app');
