<template>
    <div class="app">
        <router-view :class="{ hide_app: !isShowPage }" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useBan } from "@/hooks/ban";
import axios from "@/api";
import { ElMessage, ElMessageBox } from "element-plus";

export default defineComponent({
    name: "App",
    setup() {
        //根据ip禁用页面逻辑
        const { isShowPage } = useBan();
        let etag = "";
        const interval = 1000 * 60;

        const checkEtag = async () => {
            const res = await axios.get("/");
            console.log("etag:", etag, res.headers.etag);
            if (!etag) {
                etag = res.headers.etag;
            } else if (etag !== res.headers.etag) {
                ElMessageBox.confirm("检测到系统有更新，是否继续?", "Warning", {
                    confirmButtonText: "确定",
                    cancelButtonText: "稍后提醒我",
                    type: "warning",
                })
                    .then(() => {
                        window.location.reload();
                    })
                    .catch(() => {
                        ElMessage({
                            type: "info",
                            message: "稍后提醒我",
                        });
                    });
            }
            setTimeout(checkEtag, interval);
        };
        checkEtag();
        return {
            isShowPage,
        };
    },
});
</script>
<style lang="less">
@import "@/assets/common/css/base.less";
.hide_app {
    visibility: hidden;
}
</style>
