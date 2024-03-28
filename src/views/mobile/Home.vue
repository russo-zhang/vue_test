<template>
    <div class="home">
        <main>
            <ul>
                <li>
                    <el-button type="primary" @click="twitterShare">Twitter / X Share</el-button>
                </li>
                <li>
                    <el-button @click="facebookShare">Facebook Share</el-button>
                </li>
                <li>
                    <el-button type="primary" @click="lineShare">Line Share</el-button>
                </li>
            </ul>
        </main>
    </div>
</template>

<script lang="ts" setup>
const shareUrl = "https://www.vue-test.site";
const twitterShare = () => {
    const text = "This is share text example";
    const via = "Your Twitter username example";
    const hashtags = "hashtags example";
    const intentUrl =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(text) +
        "&url=" +
        encodeURIComponent(shareUrl) +
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
            href: shareUrl,
            display: "popup",
            redirect_uri: shareUrl, //用户在完成 Facebook 对话框操作后跳转的 URL
        },
        function (response: any) {
            console.log("response:", response);
        },
    );
};
const lineShare = () => {
    const intentUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`;
    window.open(intentUrl, "_blank", "width=550,height=420");
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
