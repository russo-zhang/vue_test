<template>
    <div class="home">
        <main>
            <el-button @click="share">Facebook share</el-button>
        </main>
    </div>
</template>

<script lang="ts" setup>
const share = () => {
    (window as any).FB.ui(
        {
            method: "share",
            hashtag: "#hello vue3",
            href: "https://www.vue-test.site",
            display: "popup",
            redirect_uri: "https://www.vue-test.site", //用户在完成 Facebook 对话框操作后跳转的 URL
        },
        function (response: any) {
            console.log("response:", response);
        },
    );
};
</script>
<style lang="less" scoped>
main {
    width: 100vw;
    margin: 100px auto;
}
</style>
