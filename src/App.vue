<template>
    <router-view :class="{ hide_app: !isShowPage }" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useBan } from "@/hooks/ban";
export default defineComponent({
    name: "App",
    setup() {
        //根据ip禁用页面逻辑
        const { isShowPage } = useBan();
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
