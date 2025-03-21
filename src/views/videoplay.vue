<template>
    <div class="videoplay">
        <div class="video_wrap">
            <!-- <video src="/video/opening_m.mp4"></video> -->
            <video id="video" class="video" autoplay="true" controls="false" muted loop playsinline x5-video-player-type="h5">
                <source src="/video/opening_m.mp4" />
            </video>
        </div>
    </div>
</template>
<script lang="ts" setup></script>

<style lang="less" scoped>
.videoplay {
    width: 100%;
    height: 100%;
    .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    // .video_wrap {
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     z-index: 9999;
    //     .video {
    //         width: 100%;
    //         height: 100%;
    //         object-fit: cover;
    //     }
    // }
}
</style>
