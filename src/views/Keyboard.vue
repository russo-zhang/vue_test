<template>
    <div class="Keyboard">
        <button id="enterFullScreenButton" @click="enterFullScreen($event)">进入全屏</button>
        <br />
        <button id="exitFullScreenButton" @click="exitFullScreen">退出全屏</button>
        <!-- <br />
        <button id="toggleFullScreenButton" @click="toggleFullScreen($event)">切换全屏</button>
        <br />
        <el-button @click="videoFullScreen">videoFullScreen</el-button>
        <br />
        <el-button @click="videoExitFullScreen">videoExitFullScreen</el-button> -->
        <!-- <video src="https://d3qgi0t347dz44.cloudfront.net/release/windowspack/riichicity_pv.mp4"></video> -->
    </div>
</template>
<script setup>
/* const fullscreen = () => {
    const rfs = el.requestFullscreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    } else {
        alert("浏览器不支持全屏");
    }
}; */
function enterFullScreen(e) {
    const el = document.documentElement;
    if (el.requestFullscreen) {
        el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
        // Safari
        el.webkitRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
        // Firefox
        el.mozRequestFullScreen();
    } else if (el.msRequestFullscreen) {
        // IE/Edge
        el.msRequestFullscreen();
    } else {
        alert("浏览器不支持全屏");
    }
}

function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        // Safari
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
    }
}
function toggleFullScreen(e) {
    console.log("e:", e);
    console.log("document.fullscreenElement:", document.fullscreenElement);
    if (
        document.fullscreenElement ||
        document.msFullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.userDefinedFullscreenElement
    ) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.userDefinedFullscreenElement) {
            document.userDefinedFullscreenElement = null;
            document.styleSheets[0].deleteRule(".UserDefinedFullscreenElement");
            e.className = e.className.replace(" UserDefinedFullscreenElement", "");
            window.removeEventListener("keydown", function (ev) {
                if (ev.key === "Escape") {
                    toggleFullScreen(e);
                }
            });
        }
    } else {
        if (e.requestFullscreen) {
            e.requestFullscreen();
        } /*FireFox */ else if (e.mozRequestFullScreen) {
            e.mozRequestFullScreen();
        } /*Chrome等 */ else if (e.webkitRequestFullScreen) {
            e.webkitRequestFullScreen();
        } /*IE11*/ else if (e.msRequestFullscreen) {
            e.msRequestFullscreen();
        } /* 适配safari */ else {
            document.styleSheets[0].insertRule(
                ".UserDefinedFullscreenElement{position:fixed !important;top:0px !important;left:0px !important;height:100% !important;width:100% !important;z-index:9999999 !important;}",
            );
            document.userDefinedFullscreenElement = e;
            e.className += " UserDefinedFullscreenElement";
            window.addEventListener("keydown", function (ev) {
                if (ev.key === "Escape") {
                    toggleFullScreen(e);
                }
            });
        }
    }
}
const videoFullScreen = () => {
    const video = document.querySelector("video");
    console.log("video:", video);
    console.dir(video);
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
        // Safari on iOS
        video.webkitEnterFullscreen();
    } else if (video.mozRequestFullScreen) {
        // Firefox
        video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
        // IE/Edge
        video.msRequestFullscreen();
    }
};
const videoExitFullScreen = () => {
    document.querySelector("video").webkitExitFullscreen();
};
</script>

<style lang="less" scoped>
.Keyboard {
    height: 100vh;
    border: 6px solid pink;
    box-sizing: border-box;
    background-color: gold;
    button {
        margin-bottom: 20px;
    }
}
</style>
