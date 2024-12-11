import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/mobile/Home.vue"),
    },
    {
        path: "/swipe",
        name: "Swipe",
        component: () => import("@/views/mobile/Swipe.vue"),
    },
    {
        path: "/screenshot",
        name: "Screenshot",
        component: () => import("@/views/Screenshot.vue"),
    },
    {
        path: "/forbidden",
        name: "Forbidden",
        component: () => import("@/views/Forbidden.vue"),
    },
    {
        path: "/:catchAll(.*)",
        name: "Error",
        component: () => import("@/views/Error.vue"),
    },
];
export default routes;
