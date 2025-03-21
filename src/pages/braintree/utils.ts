export const getUrlParams = () => {
    const params: any = {};
    const url = document.location.search;
    const arrObj = url.split("?");
    if (arrObj.length > 1) {
        const arrPara = arrObj[1].split("&");
        for (let i = 0; i < arrPara.length; i++) {
            const keyValueArr = arrPara[i].split("=");
            const key = keyValueArr[0];
            const value = keyValueArr[1];
            params[key] = value;
        }
    }
    return params;
};
