<template>
    <div class="app">
        <header>hello</header>
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
        let lastModified = "";
        const interval = 1000 * 10;

        const checkEtag = async () => {
            const res = await axios(`/index.html`, {
                method: "head",
                headers: {
                    "Cache-Control": "no-cache",
                },
            });
            console.log("res.headers:", res.headers);
            console.log("last-modified:", res.headers["last-modified"]);
            if (!lastModified) {
                lastModified = res.headers["last-modified"];
                setTimeout(checkEtag, interval);
            } else if (lastModified !== res.headers["last-modified"]) {
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
                        setTimeout(checkEtag, interval);
                    });
            }
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
