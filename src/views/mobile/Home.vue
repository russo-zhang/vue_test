<template>
    <div class="home">
        <el-button @click="screenshot">Screenshot</el-button>
        <main id="screenshot_node">
            <header v-if="isShowLayout">头部信息</header>
            <div class="img_wrap">
                <img :src="roleSrc" alt="" crossorigin="anonymous" />
            </div>
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
                <el-divider></el-divider>
                <!-- <li>
                    <el-button type="primary" @click="weChatShare">WeChat Share</el-button>
                </li> -->
                <li>
                    <el-button @click="baiduShare">百度贴吧 分享</el-button>
                </li>
                <li>
                    <el-button type="primary" @click="weiboShare">微博 分享</el-button>
                </li>
                <li>
                    <el-button @click="qqShare">QQ 分享</el-button>
                </li>
            </ul>
            <footer v-if="isShowLayout">底部信息</footer>
        </main>
        <div class="screenshot_img_wrap">
            <img :src="screenshotImgSrc" alt="" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import DeviceDetector from "device-detector-js";
const shareUrl = "https://www.vue-test.site";
const title = "share title example";
const shareText = "share text example";
const sharePic = "https://www.mahjong-jp.com/static/img/roles/role27.png";
const openShareWindow = (url: string) => {
    window.open(url, "_blank", "width=550,height=420");
};
const twitterShare = () => {
    const via = "Your Twitter username example";
    const hashtags = "hashtags example";
    const intentUrl =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(shareText) +
        "&url=" +
        encodeURIComponent(shareUrl) +
        "&via=" +
        encodeURIComponent(via) +
        "&hashtags=" +
        encodeURIComponent(hashtags);
    openShareWindow(intentUrl);
};
const facebookShare = () => {
    (window as any).FB.ui(
        {
            method: "share",
            hashtag: "#hello vue3 #hi vue32024",
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
    const intentUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(
        shareText,
    )}`;
    openShareWindow(intentUrl);
};
const whatsAppShare = () => {
    const intentUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
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
    const intentUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(
        title,
    )}&pic=${encodeURIComponent(sharePic)}`;
    openShareWindow(intentUrl);
};
const qqShare = () => {
    const intentUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(
        title,
    )}&pics=${encodeURIComponent(sharePic)}`;
    openShareWindow(intentUrl);
};

// 将图片转为base64
const imgToBase64 = (src: string) => {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = src;
        img.crossOrigin = "Anonymous";
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0, img.width, img.height);
            const dataURL = canvas.toDataURL("image/png");
            resolve(dataURL);
        };
    });
};
const roleSrc = ref();
onMounted(() => {
    const role = require("@/assets/image/role.png");
    console.log("role", role);
    imgToBase64(role).then((res) => {
        console.log("imgToBase64:", res);
        roleSrc.value = res;
    });
});
import { toPng } from "html-to-image";
import { nextTick, onMounted, ref } from "vue";
const isShowLayout = ref(true);
const screenshotImgSrc = ref("");
const screenshot = () => {
    isShowLayout.value = false;
    nextTick(() => {
        if (!document.getElementById("screenshot_node")) {
            console.log("screenshot_node is not exist");
            return;
        }
        toPng(document.getElementById("screenshot_node") as HTMLElement)
            .then(function (dataUrl) {
                // 设备检测
                const deviceDetector = new DeviceDetector();
                const device = deviceDetector.parse(navigator.userAgent);
                console.log("device.os?.name:", device.os?.name);
                if (device.os?.name === "iOS") {
                    screenshotImgSrc.value = dataUrl;
                    return;
                }
                const link = document.createElement("a");
                link.download = "my-image-name.png";
                link.href = dataUrl;
                link.click();
            })
            .then(() => {
                // 重新显示布局
                isShowLayout.value = true;
            });
    });
};
</script>
<style lang="less" scoped>
main {
    padding: 10vw 5vw;
    text-align: center;
    header,
    footer {
        width: 100%;
        height: 80px;
        text-align: center;
        font-size: 2rem;
        color: #333;
        background-color: gold;
    }
    img {
        width: 400px;
    }
    ul {
        li {
            line-height: 6vh;
        }
    }
    .screenshot_img_wrap {
        border: 2px solid pink;
    }
}
</style>