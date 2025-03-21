<template>
    <div class="Live2d">
        <canvas id="canvas" ref="liveCanvas"></canvas>
    </div>
</template>
<script setup>
// import "pixi-spine";
// import { Application, Assets } from "pixi.js";

import * as PIXI from "pixi.js";
import { Spine } from "@esotericsoftware/spine-pixi-v8";
import { getSpine } from "./utils/spine-example";
import { onMounted, onBeforeUnmount, ref } from "vue";
const liveCanvas = ref(null);
const app = new PIXI.Application();
onMounted(() => {
    console.log("PIXI:", PIXI);
    init();
});
const init = async () => {
    await app.init({
        backgroundColor: "#3a3d41",
        canvas: liveCanvas.value,
        autoStart: true,
        resizeTo: window,
        backgroundAlpha: 1,
    });
    console.log("app:", app);
    await loadGameAssets();

    // const spineExample = await getSpine();
    // if (!spineExample) {
    //     console.warn("spineExample is null");
    //     return;
    // }

    // if (!app) {
    //     return;
    // }
    // app.stage.addChild(spineExample);
    // app.stage.interactive = true;
};
async function loadGameAssets() {
    try {
        const manifest = {
            bundles: [
                {
                    name: "seibi",
                    assets: [
                        {
                            name: "seibi",
                            // srcs: "https://d3am2dlyhf9rj7.cloudfront.net/dev/public/root/live2d/seibi/spine-assets/yiseqingmei-yuanpi.json",
                            srcs: "/live2d/AU.RO.RA_day/xxgbaizhan.json",
                        },
                    ],
                },
            ],
        };

        const res1 = await PIXI.Assets.init({ manifest });
        console.log("res1:", res1);
        // const res2 = await PIXI.Assets.loadBundle(["seibi"]);
        // console.log("res2:", res2);
    } catch (error) {
        console.error("error:", error);
    }
}

onBeforeUnmount(() => {
    if (app && app.destroy) {
        app.destroy();
    }
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
