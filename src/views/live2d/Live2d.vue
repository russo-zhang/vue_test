<template>
    <div class="Live2d">
        <!-- <canvas id="canvas" ref="liveCanvas"></canvas> -->
    </div>
</template>
<script setup>
import "pixi-spine";
import { Application, Assets } from "pixi.js";
import { getSpine } from "./utils/spine-example";
let app;
window.onload = async () => {
    try {
        const gameWidth = window.innerWidth;
        const gameHeight = window.innerHeight;
        app = new Application({
            // backgroundColor: 0xd3d3d3,
            width: gameWidth,
            height: gameHeight,
        });
        await loadGameAssets();

        document.body.appendChild(app.view);

        resizeCanvas();

        const spineExample = await getSpine();

        app.stage.addChild(spineExample);
        app.stage.interactive = true;
    } catch (error) {
        console.log(error);
    }
};
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
        // app.renderer.resize(window.innerWidth, window.innerHeight);
        // app.stage.scale.x = window.innerWidth / gameWidth;
        // app.stage.scale.y = window.innerHeight / gameHeight;
    };

    resize();

    window.addEventListener("resize", resize);
}
</script>

<style lang="less" scoped>
body {
    overflow: hidden;
    margin: 0 auto;
    background-color: black;
}
</style>
