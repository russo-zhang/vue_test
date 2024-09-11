<template>
    <div class="Live2d">
        <canvas ref="liveCanvas"></canvas>
    </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import * as PIXI from "pixi.js";
console.log("PIXI:", PIXI);
window.PIXI = PIXI; // 为了pixi-live2d-display内部调用
console.log("window:", window);
const liveCanvas = ref(null);
// import { Live2DModel } from "pixi-live2d-display";
import { Live2DModel } from "pixi-live2d-display/cubism4";
console.log("Live2DModel:", Live2DModel);
let app; // 为了存储pixi实例，方便销毁
let model; // 为了存储live2d实例，方便销毁

onMounted(async () => {
    app = new PIXI.Application({
        view: liveCanvas.value,
        autoStart: true,
        resizeTo: window,
        backgroundAlpha: 0,
    });

    // 打包后live2d资源会出现在dist/下，这里用相对路径就能引用到了
    model = await Live2DModel.from(
        "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display//test/assets/haru/haru_greeter_t03.model3.json",
    );

    app.stage.addChild(model);
    model.scale.set(0.1); // 调整缩放比例，一般原始资源尺寸非常大，需要缩小
});

onBeforeUnmount(() => {
    model?.destroy();
    app?.destroy();
});
</script>

<style lang="less" scoped>
.Live2d {
}
</style>
