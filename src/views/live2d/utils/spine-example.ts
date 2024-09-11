import { isMobile } from "@/utils";
import { Spine } from "pixi-spine";

import { Assets } from "pixi.js";

export async function getSpine() {
    try {
        const spineResource = await Assets.get("seibi");
        console.log("spineResource:", spineResource);
        const spineExample = new Spine(spineResource.spineData);
        console.log("spineExample:", spineExample);
        // spineExample.scale.set(0.4, 0.4);
        const { width, height } = getExampleSize();
        spineExample.width = width;
        spineExample.height = height;
        spineExample.x = window.innerWidth / 2 - width / 2;
        spineExample.y = window.innerHeight - (window.innerHeight - height) / 2;
        // 设置皮肤 [HAIXIU, HAIXIU, KAIXIN, Normal, SHENGQI, WEIXIAO, WUNAI]
        spineExample.skeleton.setSkinByName("Normal");
        //动画轨道的索引, 动画名称, 是否循环播放
        spineExample.state.setAnimation(0, "IDLE", true);
        return spineExample;
    } catch (error) {
        console.log("error:", error);
    }
}
const getExampleSize = () => {
    const rate = 0.8;
    const modelWidth = 1294.28 * rate;
    const modelHeight = 2602.02 * rate;
    const windowWidth = window.innerWidth * rate;
    const windowHeight = window.innerHeight * rate;
    const size = { width: 0, height: 0 };
    if (isMobile()) {
        size.width = windowWidth;
        size.height = (modelHeight * windowWidth) / modelWidth;
    } else {
        size.height = windowHeight;
        size.width = (modelWidth * windowHeight) / modelHeight;
    }
    return size;
};
/* export async function getSpine(): Promise<Spine> {
    const spineResource = await Assets.get("pixie");

    const spineExample = new Spine(spineResource.spineData);
    spineExample.scale.set(0.3, 0.3);
    spineExample.y = spineExample.height * 1.1;
    spineExample.x = spineExample.width / 2;
    spineExample.stateData.setMix("running", "jump", 0.2);
    spineExample.stateData.setMix("jump", "running", 0.4);
    spineExample.state.setAnimation(0, "running", true);

    return spineExample;
} */
