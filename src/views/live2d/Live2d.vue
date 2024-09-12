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
onMounted(async () => {
    app = new Application({
        backgroundColor: "#3a3d41",
        view: liveCanvas.value,
        autoStart: true,
        resizeTo: window,
        backgroundAlpha: 1,
    });
    await loadGameAssets();

    resizeCanvas();

    const spineExample = await getSpine();

    app.stage.addChild(spineExample);
    app.stage.interactive = true;
});
async function loadGameAssets() {
    const manifest = {
        bundles: [
            {
                name: "seibi",
                assets: [
                    {
                        name: "seibi",
                        srcs: "./seibi/spine-assets/yiseqingmei-yuanpi.json",
                    },
                ],
            },
        ],
    };

    await Assets.init({ manifest });
    await Assets.loadBundle(["seibi"]);
}

function resizeCanvas() {
    const resize = () => {
        const { scale, ratio } = getExampleSize();
        console.log("scale:", scale);
        // alert(`scale:${scale},width:${window.innerWidth * ratio},height:${window.innerHeight * ratio}`);
        // app.stage.scale.set(scale, scale);
        app.renderer.resize(window.innerWidth * ratio, window.innerHeight * ratio);
    };

    resize();

    window.addEventListener("resize", resize);
}
onBeforeUnmount(() => {
    app?.destroy();
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
