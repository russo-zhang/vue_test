<template>
    <div class="home">
        <main>
            <ul>
                <li>
                    <el-button type="primary" @click="twitterShare">Twitter Share</el-button>
                </li>
                <li>
                    <el-button @click="facebookShare">Facebook Share</el-button>
                </li>
            </ul>
        </main>
    </div>
</template>

<script lang="ts" setup>
const twitterShare = () => {
    const text = "This is share text example";
    const url = "https://www.vue-test.site";
    const via = "Your Twitter username example";
    const hashtags = "hashtags example";
    const intentUrl =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(text) +
        "&url=" +
        encodeURIComponent(url) +
        "&via=" +
        encodeURIComponent(via) +
        "&hashtags=" +
        encodeURIComponent(hashtags);
    window.open(intentUrl, "_blank", "width=550,height=420");
};
const facebookShare = () => {
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
    padding: 10vw 5vw;
    text-align: center;
    ul {
        li {
            line-height: 6vh;
        }
    }
}
</style>
