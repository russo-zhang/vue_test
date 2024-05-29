<template>
    <div class="Screenshot">
        <el-button @click="screenshot">Screenshot</el-button>
        <main id="screenshot_node">
            <header v-if="isShowLayout">头部信息</header>
            <section>
                <h2>Screenshot content</h2>
                <div class="img_wrap">
                    <img :src="roleSrc" alt="" crossorigin="anonymous" />
                </div>
            </section>
            <footer v-if="isShowLayout">底部信息</footer>
        </main>

        <van-dialog v-model:show="showDialog" title="标题" show-cancel-button>
            <div class="screenshot_img_wrap">
                <img :src="screenshotImgSrc" alt="" />
            </div>
        </van-dialog>
    </div>
</template>

<script lang="ts" setup>
import DeviceDetector from "device-detector-js";
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
    // isShowLayout.value = false;
    // nextTick(() => {
    if (!document.getElementById("screenshot_node")) {
        console.log("screenshot_node is not exist");
        return;
    }
    toPng(document.getElementById("screenshot_node") as HTMLElement).then(function (dataUrl) {
        // 设备检测
        const deviceDetector = new DeviceDetector();
        const device = deviceDetector.parse(navigator.userAgent);
        console.log("device.os?.name:", device.os?.name);
        if (device.os?.name === "iOS") {
            screenshotImgSrc.value = dataUrl;
            showDialog.value = true;
            return;
        }
    });
    // .then(() => {
    //     // 重新显示布局
    //     isShowLayout.value = true;
    // });
    // });
};
const showDialog = ref(false);
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
}
.screenshot_img_wrap {
    width: 100%;
    border: 2px solid pink;
    img {
        width: 100%;
    }
}
</style>
