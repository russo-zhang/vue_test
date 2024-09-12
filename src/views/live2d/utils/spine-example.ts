import { isMobile } from "@/utils";
import { Spine } from "pixi-spine";

import { Assets } from "pixi.js";

export async function getSpine() {
    try {
        const spineResource = await Assets.get("seibi");
        console.log("spineResource:", spineResource);
        const spineExample = new Spine(spineResource.spineData);
        console.log("spineExample:", spineExample);
        const { width, height, ratio } = getExampleSize();
        // alert(`width:${width}, height:${height}`);
        // console.log("scale:", scale);
        // console.log("width:", width);
        console.log("window.innerHeight:", window.innerHeight * ratio);
        console.log("height:", height);
        // spineExample.scale.set(scale, scale);
        spineExample.width = width;
        spineExample.height = height;
        spineExample.x = (window.innerWidth * ratio - width) / 2;
        console.log("spineExample.x:", spineExample.x);
        // spineExample.y = window.innerHeight * ratio;
        // spineExample.y = window.innerHeight * ratio * 2 - height / 2;
        spineExample.y = (window.innerHeight * ratio + height) / 2;
        // 设置皮肤 [HAIXIU, HAIXIU, KAIXIN, Normal, SHENGQI, WEIXIAO, WUNAI]
        spineExample.skeleton.setSkinByName("Normal");
        //动画轨道的索引, 动画名称, 是否循环播放
        spineExample.state.setAnimation(0, "IDLE", true);
        return spineExample;
    } catch (error) {
        console.log("error:", error);
    }
}
export const getExampleSize = () => {
    const ratio = window.devicePixelRatio || 1;
    const rate = 0.8;
    const modelWidth = 1294.28 * rate;
    const modelHeight = 2602.02 * rate;
    const windowWidth = window.innerWidth * ratio * rate;
    const windowHeight = window.innerHeight * ratio * rate;
    const scale = Math.round((1 / ratio) * 1000) / 1000;
    const size = { ratio, scale, width: 0, height: 0 };
    // alert(`size:${JSON.stringify(size)}, ratio:${ratio}`);
    if (isMobile()) {
        size.width = windowWidth;
        size.height = (modelHeight * windowWidth) / modelWidth;
    } else {
        size.height = windowHeight;
        size.width = (modelWidth * windowHeight) / modelHeight;
    }
    // size.width = size.width * ratio;
    // size.height = size.height * ratio;
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
