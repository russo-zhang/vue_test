import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getIpInfo } from "@/api/auth";
export const useBan = () => {
    const route = useRoute();
    const router = useRouter();
    const isShowPage = ref(false);
    async function isValidIp() {
        let res = await getIpInfo();
        if (res.data.ban) {
            router.push({ name: "Forbidden" });
        }
        isShowPage.value = true;
    }
    if (route.name === "Forbidden") {
        isShowPage.value = true;
    } else {
        isValidIp();
    }
    return {
        isShowPage,
    };
};
