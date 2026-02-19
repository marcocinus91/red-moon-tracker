import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import piniaPersistedstate from "pinia-plugin-persistedstate";
import Tres from '@tresjs/core';

const pinia = createPinia();
pinia.use(piniaPersistedstate);

createApp(App).use(Tres).use(pinia).use(router).mount("#app");
