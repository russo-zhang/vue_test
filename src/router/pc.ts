import { RouteRecordRaw } from "vue-router";
export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/pc/Home.vue"),
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
