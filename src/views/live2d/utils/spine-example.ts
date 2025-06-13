import { isMobile } from "@/utils";
// import { Spine } from "pixi-spine";
import { Spine } from "@esotericsoftware/spine-pixi-v7";
import { Assets } from "pixi.js";

export async function getSpine() {
    try {
        console.log("Assets:", Assets);
        const spineResource = await Assets.get("seibi");
        console.log("spineResource:", spineResource);
        if (!spineResource) {
            console.warn("spineResource is null");
            return;
        }
        const spineExample = new Spine(spineResource.spineData);
        console.log("spineExample:", spineExample);
        const width = 1920;
        const height = 1080;
        spineExample.width = width;
        spineExample.height = height;
        spineExample.x = (window.innerWidth - width) / 2;
        console.log("spineExample.x:", spineExample.x);
        spineExample.y = (window.innerHeight + height) / 2;
        // skins default HAIXIU KAIXIN Normal SHENGQI WEIXIAO WUNAI
        // 设置皮肤 [HAIXIU, HAIXIU, KAIXIN, Normal, SHENGQI, WEIXIAO, WUNAI]
        // const defaultSkinName = "WUNAI";
        const defaultSkinName = getDefalutSkin(spineResource.spineData);
        // console.log("defaultSkinName:", defaultSkinName);
        spineExample.skeleton.setSkinByName(defaultSkinName);

        //动画轨道的索引, 动画名称, 是否循环播放
        const defaultAnimationName = getDefaultAnimationName(spineResource.spineData);
        // console.log("defaultAnimationName:", defaultAnimationName);
        spineExample.state.setAnimation(0, defaultAnimationName, true);
        return spineExample;
    } catch (error) {
        console.log("error:", error);
    }
}

function getDefalutSkin({ skins, defaultSkin }: any) {
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
}
function getDefaultAnimationName({ animations }: any) {
    const priorList = ["stand"];
    for (let i = 0; i < priorList.length; i++) {
        const animation = animations.find((item: any) => item.name === priorList[i]);
        if (animation) {
            return animation.name;
        }
    }
    return animations[0].name;
}
