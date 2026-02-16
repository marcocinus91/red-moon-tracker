import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import piniaPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPersistedstate);

createApp(App).use(pinia).use(router).mount("#app");
