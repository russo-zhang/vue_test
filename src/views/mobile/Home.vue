<template>
    <div class="home">
        <a href="javascript:;" @click="share">share</a>
    </div>
</template>

<script lang="ts" setup>
const share = () => {
    (window as any).FB.ui(
        {
            method: "share",
            href: "https://developers.facebook.com/docs/",
        },
        function (response: any) {
            console.log("response:", response);
        },
    );
};
</script>
<style lang="less" scoped>
main {
}
</style>
