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
    {
        path: "/fingerprint",
        name: "fingerprint",
        component: () => import("@/views/Fingerprint.vue"),
    },
    {
        path: "/relation",
        name: "relation",
        component: () => import("@/views/relation/Father.vue"),
    },
    {
        path: "/live2d",
        name: "live2d",
        component: () => import("@/views/live2d/Live2d.vue"),
    },
    {
        path: "/keyboard",
        name: "keyboard",
        component: () => import("@/views/Keyboard.vue"),
    },
    
];
routes.push(...commonRoutes);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
