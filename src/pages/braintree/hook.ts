import { getUrlParams } from "./utils";
import { getOrderInfo } from "./api";
import { Ref, computed, ref } from "vue";
export const usePay = () => {
    let { order_id, signature, lang } = getUrlParams();
    const officialUrl = process.env.VUE_APP_OFFICIAL_URL;
    const site_type = ref(0);
    const isWebSite = computed(() => {
        return site_type.value === 10;
    });
    const successUrl = computed(() => {
        if (isWebSite.value) {
            return `/payment/success?order_id=${order_id}&signature=${signature}&lang=${lang}`;
        }
        return `${officialUrl}/resource/payment/success.html?order_id=${order_id}&signature=${signature}&lang=${lang}`;
    });
    const failedUrl = computed(() => {
        if (isWebSite.value) {
            return `/payment/failed`;
        }
        return `${officialUrl}/resource/payment/failed.html`;
    });
    const redirect = (url: Ref<string>) => {
        console.log("redirect url:", url);
        // window.location.replace(url.value);
        window.open(url.value, "_blank");
    };

    const getOrderStatus = async () => {
        try {
            const res: any = await getOrderInfo({ order_id: order_id, signature });
            if (res.data.code !== 0) return;
            console.log("res.data.data:", res.data.data);
            site_type.value = res.data.data.site_type;
            if (res.data.data.status === 2) {
                //成功直接跳转到成功页面
                redirect(successUrl);
            } else if (res.data.data.status === 3) {
                //失败
                redirect(failedUrl);
            }
            return res.data.data;
        } catch (error) {
            console.error("error:", error);
        }
    };
    // onMounted(getOrderStatus);
    return {
        getOrderStatus,
    };
};
