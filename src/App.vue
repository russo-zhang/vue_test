<template>
    <div class="app">
        <el-link v-for="(item, index) in routes" :key="index" :href="item.path" :type="item.name === $route.name ? 'primary' : 'info'">
            {{ item.name }}
        </el-link>
        <el-divider></el-divider>
        <router-view :class="{ hide_app: !isShowPage }" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useBan } from "@/hooks/ban";
import axios from "@/api";
import { ElMessage, ElMessageBox } from "element-plus";

import router from "@/router";
export default defineComponent({
    name: "App",
    setup() {
        //根据ip禁用页面逻辑
        const { isShowPage } = useBan();
        let lastModified = "";
        /* 
            检测系统更新
            interval: 检测时间间隔,不传默认5分钟
        */
        const checkSystemUpdate = (minutes = 5) => {
            const interval = 1000 * 60 * minutes;
            // 提醒更新
            const remindUpdate = () => {
                ElMessageBox.confirm("检测到系统有更新，是否刷新页面?", "Warning", {
                    confirmButtonText: "刷新",
                    cancelButtonText: `稍后提醒我`,
                    type: "warning",
                })
                    .then(() => {
                        // 刷新页面
                        window.location.reload();
                    })
                    .catch(() => {
                        ElMessage({
                            type: "warning",
                            message: `将在${minutes}分钟后再次提醒更新`,
                        });
                        setTimeout(remindUpdate, interval);
                    });
            };
            // 检测最后修改时间
            const checkLastModified = async () => {
                const res = await axios(`/index.html`, {
                    method: "head",
                    headers: {
                        "Cache-Control": "no-cache",
                    },
                });
                if (!lastModified) {
                    // 第一次检测
                    lastModified = res.headers["last-modified"];
                    setTimeout(checkLastModified, interval);
                } else if (lastModified !== res.headers["last-modified"]) {
                    // 更新了
                    remindUpdate();
                } else {
                    // 未更新
                    setTimeout(checkLastModified, interval);
                }
            };
            // 生产环境执行检测
            if (process.env.NODE_ENV === "production") {
                checkLastModified();
            }
        };
        checkSystemUpdate(60 * 24);
        return {
            isShowPage,
            routes: router.getRoutes(),
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
<style lang="less" scoped>
.app {
    > a {
        margin-right: 10px;
    }
}
</style>
