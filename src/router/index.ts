import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import mobileRoutes from "./mobile";
import pcRoutes from "./pc";
import { isMobile } from "@/utils";

let routes = [];
if (isMobile()) {
    routes = mobileRoutes;
} else {
    routes = pcRoutes;
}
const commonRoutes: Array<RouteRecordRaw> = [
    {
        path: "/twitter",
        name: "twitter",
        component: () => import("@/views/Twitter.vue"),
    },
];
routes.push(...commonRoutes);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
