<template>
    <div class="spine">spine</div>
</template>
<script lang="ts" setup>
import { Application, Assets } from "pixi.js";
import { Spine } from "@esotericsoftware/spine-pixi-v7";

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

/** Setup app and initialise assets */
async function init() {
    // Add pixi canvas element (app.view) to the document's body
    document.body.appendChild(app.view);

    // Pre-load the skeleton data and atlas. You can also load .json skeleton data.
    Assets.add({ alias: "spineboyData", src: "/spine/demo_v7/spineboy-pro.skel" });
    Assets.add({ alias: "spineboyAtlas", src: "/spine/demo_v7/spineboy-pma.atlas" });
    await Assets.load(["spineboyData", "spineboyAtlas"]);

    // Create the spine display object
    const spineboy = Spine.from("spineboyData", "spineboyAtlas", {
        scale: 0.5,
    });
    console.log("spineboy:", spineboy);

    // Set the default mix time to use when transitioning
    // from one animation to the next.
    spineboy.state.data.defaultMix = 0.2;

    // Center the spine object on screen.
    spineboy.x = window.innerWidth / 2;
    spineboy.y = window.innerHeight / 2 + spineboy.getBounds().height / 2;

    // Set animation "cape-follow-example" on track 0, looped.
    spineboy.state.setAnimation(0, "run", true);

    // Add the display object to the stage.
    app.stage.addChild(spineboy);
}

// Init everything
init();
</script>

<style lang="less" scoped>
.spine {
}
</style>
