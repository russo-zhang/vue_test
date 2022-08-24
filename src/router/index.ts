import { createRouter, createWebHistory } from "vue-router";

import mobileRoutes from "./mobile";
import pcRoutes from "./pc";
import { isMobile } from "@/utils";

let routes = [];
if (isMobile()) {
    routes = mobileRoutes;
} else {
    routes = pcRoutes;
}

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
