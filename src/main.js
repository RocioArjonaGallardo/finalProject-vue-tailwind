import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./index.css";
import "./static/main.css";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");
