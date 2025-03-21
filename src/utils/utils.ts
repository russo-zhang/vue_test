import DeviceDetector from "device-detector-js";
export const isMobile = () => {
    return !!navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
    );
};
export const isiPad = () => {
    const deviceDetector = new DeviceDetector();
    const device = deviceDetector.parse(navigator.userAgent);
    return device.device?.model === "iPad";
};
export const isClient = typeof window !== "undefined";

export const isIOS = /* #__PURE__ */ isClient && window?.navigator?.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);

export const deepClone = (obj: any) => {
    if (obj === null || typeof obj !== "object") return obj;
    const newObj: any = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        newObj[key] = deepClone(obj[key]);
    }
    return newObj;
};

export const getElContentSize = (el: any) => {
    const { width, height, paddingLeft, paddingRight, paddingTop, paddingBottom } = window.getComputedStyle(el);
    return {
        width: parseFloat(width) - parseFloat(paddingLeft) - parseFloat(paddingRight),
        height: parseFloat(height) - parseFloat(paddingTop) - parseFloat(paddingBottom),
    };
};
export const getPxByRem = (rem: any) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
// 获取translateX的值, 如果是rem单位，转为px
export const getTranslateX = (str: string) => {
    const reg = /translateX\((.*)\)/;
    const match = str.match(reg);
    if (!match) return null;
    const value = match[1];
    if (value.includes("rem")) {
        return getPxByRem(parseFloat(value));
    }
    return parseFloat(value);
};
