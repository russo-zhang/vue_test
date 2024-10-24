<template>
    <div class="Live2d">
        <canvas id="canvas" ref="liveCanvas"></canvas>
    </div>
</template>
<script setup>
import "pixi-spine";
import { Application, Assets } from "pixi.js";
import { getSpine, getExampleSize } from "./utils/spine-example";
import { onMounted, onBeforeUnmount, ref } from "vue";
const liveCanvas = ref(null);
let app;
onMounted(() => {
    init();
    // resizeCanvas();
    window.addEventListener("resize", resize);
});
const init = async () => {
    app = new Application({
        backgroundColor: "#3a3d41",
        view: liveCanvas.value,
        autoStart: true,
        resizeTo: window,
        backgroundAlpha: 1,
    });
    await loadGameAssets();

    const spineExample = await getSpine();

    const { ratio } = getExampleSize();
    app.renderer.resize(window.innerWidth * ratio, window.innerHeight * ratio);

    app.stage.addChild(spineExample);
    app.stage.interactive = true;
};
async function loadGameAssets() {
    const manifest = {
        bundles: [
            {
                name: "seibi",
                assets: [
                    {
                        name: "seibi",
                        srcs: "https://d3am2dlyhf9rj7.cloudfront.net/dev/public/root/live2d/seibi/spine-assets/yiseqingmei-yuanpi.json",
                        // srcs: "./seibi/spine-assets/yiseqingmei-yuanpi.json",
                    },
                ],
            },
        ],
    };

    await Assets.init({ manifest });
    await Assets.loadBundle(["seibi"]);
}

const resize = async () => {
    // const {
    // scale,
    // ratio,
    // } = getExampleSize();
    /*        console.log("window:", window);
        console.log("scale:", scale);
        console.log("window.innerWidth :", window.innerWidth);
        console.log("window.clientWidth :", window.clientWidth);
        console.log("window.scrollWidth :", window.scrollWidth); */

    // alert(`scale:${scale},width:${window.innerWidth * ratio},height:${window.innerHeight * ratio}`);
    // app.stage.scale.set(scale, scale);
    app.destroy();
    await init();
    // app.renderer.resize(window.innerWidth * ratio, window.innerHeight * ratio);
    // setTimeout(async () => {
    //     const spineExample = await getSpine();
    //     app.stage.addChild(spineExample);
    // }, 100);
};

onBeforeUnmount(() => {
    app.destroy();
});
</script>

<style lang="less" scoped>
body {
    background-color: black;
    #canvas {
        width: 100%;
        height: 100%;
    }
}
</style>
