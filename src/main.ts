import { createApp } from "vue";
import i18n from "@/lang/i18n";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");
