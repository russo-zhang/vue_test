<template>
    <div class="home">
        <main>
            <el-button @click="share">share</el-button>
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
            redirect_uri: true,
        },
        function (response: any) {
            console.log("response:", response);
        },
    );
};
</script>
<style lang="less" scoped>
main {
    width: 30vw;
    margin: 100px auto;
}
</style>
