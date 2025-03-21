<template>
    <div class="Portrait" :class="{ Portrait_gif: roleConfig.gifSrc }">
        <img
            v-if="roleConfig.gifSrc"
            :src="roleConfig.gifSrc"
            alt=""
            class="role_gif"
            :style="{
                width: `${roleConfig.configModelWidth}px`,
                left: `calc(50% + ${roleConfig.offsetX}px )`,
                top: `calc(50% + ${roleConfig.offsetY}px )`,
            }"
        />
        <canvas
            id="canvas"
            ref="liveCanvas"
            :width="canvasWidth"
            :height="canvasHeight"
            :class="{ hidden_live2d: roleConfig.gifSrc }"
        ></canvas>
    </div>
</template>
<script setup>
// import "pixi-spine";
// import { Spine } from "pixi-spine";
import { Application, Assets } from "pixi.js";
import { Spine } from "@esotericsoftware/spine-pixi-v8";
import { getDefaultAnimationName } from "./spine-example";
import { roleConfigList } from "@/utils/roleConfig";
import { getPxByRem } from "@/utils/utils";
import { onMounted, onBeforeUnmount, ref, computed, reactive } from "vue";
// import gsap from "gsap";
/* const props = defineProps({
    profileSrc: {
        type: String,
        default: "",
    },
    rkey: {
        type: String,
        default: "",
    },
}); */
const props = reactive({
    profileSrc: "https://d3am2dlyhf9rj7.cloudfront.net/release/public/root/live2d/twins/out/shuangzi-yuanpi.png.json",

    rkey: "GOOsuQZOf047AxgS",
});
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const liveCanvas = ref(null);

/** The PixiJS app Application instance, shared across the project */
const app = new Application();

const roleConfig = computed(() => {
    if (!props.rkey) {
        console.error("rkey is empty");
        return {};
    }
    const config = roleConfigList.find((item) => item.rkey === props.rkey);
    if (!config || !config.mobile) {
        console.error("roleConfig not found:", this.rkey);
        return {};
    }
    return {
        ...config,
        offsetX: getPxByRem(config.mobile.x || 0),
        offsetY: getPxByRem(config.mobile.y || 0),
        configModelWidth: getPxByRem(config.mobile.width || 30),
    };
});
const init = async () => {
    try {
        // 创建 PIXI 应用
        await app.init({
            width: window.innerWidth,
            height: window.innerHeight,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            resizeTo: window,
            backgroundColor: 0x2c3e50,
            hello: true,
        });

        // Add pixi canvas element (app.view) to the document's body
        // document.body.appendChild(app.canvas);
        liveCanvas.value.appendChild(app.canvas);

        // Pre-load the skeleton data and atlas. You can also load .json skeleton data.
        Assets.add({ alias: "spineboyData", src: "/spine/Mori_Luka/out/senliuge-yuanpi.json" });
        Assets.add({ alias: "spineboyAtlas", src: "/spine/Mori_Luka/out/senliuge-yuanpi.atlas" });
        const res = await Assets.load(["spineboyData", "spineboyAtlas"]);
        console.log("res:", res);
        // Create the spine display object
        const spineboy = Spine.from({
            atlas: "spineboyAtlas",
            skeleton: "spineboyData",
            scale: 0.5,
        });

        // Set the default mix time to use when transitioning
        // from one animation to the next.
        spineboy.state.data.defaultMix = 0.2;

        // Center the spine object on screen.
        spineboy.x = window.innerWidth / 2;
        spineboy.y = window.innerHeight / 2 + spineboy.getBounds().height / 2;

        // Set animation "cape-follow-example" on track 0, looped.
        spineboy.state.setAnimation(0, "IDLE", true);

        // Add the display object to the stage.
        app.stage.addChild(spineboy);

        /*        
        // 加载游戏资源
        await loadGameAssets();

        const spineExample = await getSpine(roleConfig.value);

        if (!app) return;
        if (!app.stage) return;
        // 将 spine 添加到舞台
        app.stage.addChild(spineExample);

        // gsap.from(".Portrait", {
        //     x: "100%",
        //     opacity: 0,
        //     duration: 0.5,
        // }); */
    } catch (error) {
        console.error("init error :" + error);
    }
};
onMounted(() => {
    init();
});
</script>

<style lang="less" scoped>
.Portrait {
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    #canvas {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
    }
    &.Portrait_gif {
        width: 100%;
        height: 100%;
        display: flex;
        // justify-content: center;
        // align-items: center;
        background-color: rgba(0, 0, 0, 0);
        .role_gif {
            position: absolute;
            flex-shrink: 0;
            transform: translate(-50%, -50%);
        }
        #canvas {
            position: absolute;
            top: -9999px;
            left: -9999px;
            visibility: hidden;
        }
    }
}
</style>
