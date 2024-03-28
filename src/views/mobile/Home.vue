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
                <li>
                    <el-button @click="whatsAppShare">WhatsApp Share</el-button>
                </li>
                <el-devider></el-devider>
                <!-- <li>
                    <el-button type="primary" @click="weChatShare">WeChat Share</el-button>
                </li> -->
                <li>
                    <el-button @click="baiduShare">百度贴吧 分享</el-button>
                </li>
                <li>
                    <el-button type="primary" @click="weiboShare">微博 分享</el-button>
                </li>
            </ul>
        </main>
    </div>
</template>

<script lang="ts" setup>
const shareUrl = "https://www.vue-test.site";
const title = "share title example";
const shareText = "share text example";
const sharePic = "https://www.vue-test.site/favicon.png";
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
const openShareWindow = (url: string) => {
    window.open(url, "_blank", "width=550,height=420");
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
    openShareWindow(intentUrl);
};
const whatsAppShare = () => {
    const text = "This is share text example";
    const intentUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    openShareWindow(intentUrl);
};
/* const weChatShare = () => {
        wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: '', // 必填，公众号的唯一标识
        timestamp: , // 必填，生成签名的时间戳
        nonceStr: '', // 必填，生成签名的随机串
        signature: '',// 必填，签名
        jsApiList: [] // 必填，需要使用的JS接口列表
    });
}; */
const baiduShare = () => {
    const intentUrl = `https://tieba.baidu.com/f/commit/share/openShareApi?title=${title}&url=${encodeURIComponent(
        shareUrl,
    )}&pic=${encodeURIComponent(sharePic)}`;
    openShareWindow(intentUrl);
};
const weiboShare = () => {
    const intentUrl = `http://service.weibo.com/share/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(
        title,
    )}&pic=${encodeURIComponent(sharePic)}`;
    openShareWindow(intentUrl);
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
