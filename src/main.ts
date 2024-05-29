import { createApp } from "vue";
import i18n from "@/lang/i18n";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App);
app.use(ElementPlus);

app.use(Vant);

app.use(i18n);
app.use(router);
app.mount("#app");
