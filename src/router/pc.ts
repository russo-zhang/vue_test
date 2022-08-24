import { RouteRecordRaw } from "vue-router";
export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/pc/Home.vue"),
    },
    {
        path: "/privacy-policy",
        name: "PrivacyPolicy",
        component: () => import("@/views/common/PrivacyPolicy.vue"),
    },
    {
        path: "/terms-of-service",
        name: "TermsOfService",
        component: () => import("@/views/common/TermsOfService.vue"),
    },
    {
        path: "/community-rules",
        name: "CommunityRules",
        component: () => import("@/views/common/CommunityRules.vue"),
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
