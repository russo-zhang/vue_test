// 获取当前语言
export const getCurrentLang = function () {
    return getStorage("lang") || "en";
};
// 设置localStorage
export const setStorage = function (key: string, obj: any) {
    let json = JSON.stringify(obj);
    window.localStorage.setItem(key, json);
};

// 获取localStorage
export const getStorage = function (key: string) {
    const str = window.localStorage.getItem(key);
    if (!str) {
        return null;
    }
    return JSON.parse(str);
};

// 移除localStorage
export const removeStorage = function (key: string) {
    window.localStorage.removeItem(key);
};
// 获取浏览器默认语言
export const getBrowserLang = function () {
    let browserLang = navigator.language;
    let defaultBrowserLang = "";
    if (browserLang.toLowerCase() === "cn" || browserLang.toLowerCase() === "zh" || browserLang.toLowerCase() === "zh-cn") {
        defaultBrowserLang = "zh-CN";
    } else {
        defaultBrowserLang = "en-US";
    }
    return defaultBrowserLang;
};
export const isMobile = () => {
    return !!navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
    );
};
export const isClient = typeof window !== "undefined";
export const isIOS = /* #__PURE__ */ isClient && window?.navigator?.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
