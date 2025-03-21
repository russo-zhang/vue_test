import { isMobile } from "@/utils";
import { Spine } from "@esotericsoftware/spine-pixi-v8";

import { Assets } from "pixi.js";
// import { showNotify } from "vant";

export async function getSpine(roleConfig: any) {
    try {
        const spineResource = await Assets.get(roleConfig.rkey);
        // console.log("spineResource:", spineResource);
        const spineExample = new Spine(spineResource.spineData);
        // console.log("spineExample:", spineExample);

        spineExample.pivot.set(0, 0); // 设置原点为左上角
        // console.log("spineExample.pivot:", spineExample.pivot);

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const modelWidth = spineResource.spineData.width;
        const modelHeight = spineResource.spineData.height;

        const { offsetX, offsetY, configModelWidth } = roleConfig;

        if (isMobile() && windowWidth < windowHeight) {
            spineExample.width = configModelWidth;
            spineExample.height = (modelHeight / modelWidth) * spineExample.width;
        } else {
            spineExample.width = configModelWidth;
            spineExample.height = (modelHeight / modelWidth) * spineExample.width;
        }

        // 获取Spine模型的渲染范围
        const originalBbounds = spineExample.getBounds();
        // 将模型放置在画布中心
        // 画布宽度的一半减去模型宽度的一半再减去原点的x坐标（减去原点的x坐标后，坐标原点为x=0,y=0）
        const modelX = windowWidth / 2 - spineExample.width / 2 - originalBbounds.x;
        const modelY = windowHeight / 2 - spineExample.height / 2 - originalBbounds.y;
        // 添加配置的偏移量
        spineExample.x = modelX + offsetX;
        spineExample.y = modelY + offsetY;

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
        console.error("error:", error);
    }
}

export const getDefalutSkin = ({ skins, defaultSkin }: any) => {
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
export const getDefaultAnimationName = ({ animations }: any) => {
    const priorList = ["stand"];
    for (let i = 0; i < priorList.length; i++) {
        const animation = animations.find((item: any) => item.name === priorList[i]);
        if (animation) {
            return animation.name;
        }
    }
    return animations[0].name;
};
