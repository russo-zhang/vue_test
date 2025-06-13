(function flexible(window, document) {
    let docEl = document.documentElement;
    let dpr = window.devicePixelRatio || 1;
    const isMobile = () => {
        return !!navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
        );
    };
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = 12 * dpr + "px";
        } else {
            document.addEventListener("DOMContentLoaded", setBodyFontSize);
        }
    }
    setBodyFontSize();
    function setRemUnit() {
        let rem = 0
        // if (isMobile()) {
        //     const rate = 75;
        //     rem = docEl.clientWidth / rate;
        // } else {
        //     const rate = 192;
        //     rem = docEl.clientWidth / rate;
        //     rem = Math.max(rem, 6.4);
        // }
        const rate = isMobile() ? 75 : 192;
        rem = docEl.clientWidth / rate;
        docEl.style.fontSize = rem + "px";
    }
    setRemUnit();
    window.addEventListener("resize", setRemUnit);
    window.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            setRemUnit();
        }
    });
    if (dpr >= 2) {
        let fakeBody = document.createElement("body");
        let testElement = document.createElement("div");
        testElement.style.border = ".5px solid transparent";
        fakeBody.appendChild(testElement);
        docEl.appendChild(fakeBody);
        if (testElement.offsetHeight === 1) {
            docEl.classList.add("hairlines");
        }
        docEl.removeChild(fakeBody);
    }
})(window, document);
