<template>
    <div class="spine"></div>
</template>
<script lang="ts" setup>
import { Application, Assets } from "pixi.js";
import { Spine } from "@esotericsoftware/spine-pixi-v7";
import { computed, onMounted } from "vue";

const getDefalutSkin = ({ skins, defaultSkin }: any) => {
    if (skins.length > 0) {
        // 优先显示的皮肤
        const priorList = ["Normal", "stand"];
        for (let i = 0; i < priorList.length; i++) {
            const skin = skins.find((item: any) => item.name === priorList[i]);
            if (skin) {
                return skin.name;
            }
        }
    }
    return defaultSkin.name;
};

const getDefaultAnimationName = ({ animations }: any) => {
    const priorList = ["stand"];
    const animationList = Object.keys(animations);
    for (let i = 0; i < priorList.length; i++) {
        animationList.find((key: any) => {
            if (animations[key] === priorList[i]) {
                return key;
            }
        });
    }
    return animationList[0];
};
const getPxByRem = (rem: any) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

/** The PixiJS app Application instance, shared across the project */
const app = new Application<HTMLCanvasElement>({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    resizeTo: window,
    backgroundColor: 0x2c3e50,
    hello: true,
});
const canvasWidth = window.innerWidth;
const roleConfig = computed(() => {
    const config = {
        width: 40,
        x: 0,
        y: 2,
    };
    return {
        ...config,
        offsetX: getPxByRem(config.x || 0),
        offsetY: getPxByRem(config.y || 0),
        configModelWidth: getPxByRem(config.width || 30),
    };
});
/** Setup app and initialise assets */
async function init() {
    try {
        // Add pixi canvas element (app.view) to the document's body
        document.body.appendChild(app.view);

        // Pre-load the skeleton data and atlas. You can also load .json skeleton data.
        // Assets.add({ alias: "spineData", src: "/spine/Kazama_Shizuku/out/fengjian-yuanpi.json" });
        // Assets.add({ alias: "spineAtlas", src: "/spine/Kazama_Shizuku/out/fengjian-yuanpi.atlas" });
        Assets.add({ alias: "spineData", src: "/spine/demo_v7/spineboy-pro.skel" });
        Assets.add({ alias: "spineAtlas", src: "/spine/demo_v7/spineboy-pma.atlas" });
        const spineResource = await Assets.load(["spineData", "spineAtlas"]);
        console.log("spineResource:", spineResource);
        // Create the spine display object
        const spineExample = Spine.from("spineData", "spineAtlas", {
            scale: 1,
        });
        console.log("spineExample:", spineExample);
        /* 
        spineExample.pivot.set(0, 0); // 设置原点为左上角
        // console.log("spineExample.pivot:", spineExample.pivot);

        const windowWidth = canvasWidth;
        // const windowHeight = this.canvasHeight;
        const modelWidth = spineResource.spineData.width;
        const modelHeight = spineResource.spineData.height;

        let { offsetX, offsetY, configModelWidth } = roleConfig.value;

        spineExample.width = configModelWidth;
        spineExample.height = (modelHeight / modelWidth) * spineExample.width;

        const originalBbounds = spineExample.getBounds();

        // 将模型放置在画布中心
        // 画布宽度的一半减去模型宽度的一半再减去原点的x坐标（减去原点的x坐标后，坐标原点为x=0,y=0）
        const modelX = windowWidth / 2 - spineExample.width / 2 - originalBbounds.x;
        // y轴不需要除以devicePixelRatio
        // const modelY = windowHeight / 2 - spineExample.height / 2 - originalBbounds.y;
        const modelY = -originalBbounds.y;
        // 添加配置的偏移量
        spineExample.x = modelX + offsetX;
        spineExample.y = modelY + offsetY;
 */
        // const defaultSkinName = getDefalutSkin(spineResource.spineData);
        // console.log("defaultSkinName:", defaultSkinName);
        // spineExample.skeleton.setSkinByName(defaultSkinName);

        //动画轨道的索引, 动画名称, 是否循环播放
        // const defaultAnimationName = getDefaultAnimationName(spineResource.spineData);
        // console.log("defaultAnimationName:", defaultAnimationName);
        spineExample.state.setAnimation(0, "run", true);
        // Add the display object to the stage.
        app.stage.addChild(spineExample);
    } catch (err) {
        console.error(err);
    }
}
onMounted(() => {
    // Init everything
    init();
});
</script>

<style lang="less" scoped>
.spine {
}
</style>
