<template>
    <swiper
        class="swiper"
        :modules="modules"
        :slides-per-view="1"
        :slides-per-group="1"
        :slides-per-group-skip="0"
        :centered-slides="false"
        :grab-cursor="true"
        :keyboard="{ enabled: true }"
        :scrollbar="true"
        :navigation="true"
        :pagination="{ clickable: true }"
        :direction="'vertical'"
        :breakpoints="{
            375: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            414: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        }"
    >
        <swiper-slide class="slide">Slide 1</swiper-slide>
        <swiper-slide class="slide">Slide 2</swiper-slide>
        <swiper-slide class="slide">Slide 3</swiper-slide>
        <swiper-slide class="slide">Slide 4</swiper-slide>
        <swiper-slide class="slide">Slide 5</swiper-slide>
        <swiper-slide class="slide">Slide 6</swiper-slide>
        <swiper-slide class="slide">Slide 7</swiper-slide>
        <!-- <swiper-slide class="slide">Slide 8</swiper-slide> -->
    </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default defineComponent({
    name: "swiper-example-slides-per-group-skip",
    title: "Slides per group skip",
    url: import.meta.url,
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Keyboard, Scrollbar, Navigation, Pagination],
        };
    },
});
</script>

<style lang="less" scoped>
//@import "@/styles/variables.scss";
//@import "@/styles/mixins.scss";
//@import "./style.scss";

.swiper {
    height: 100vh;
    // @include swiper-wrapper();
}

.slide {
    // @include swiper-slide();
    color: #fff;
    &:nth-child(1) {
        background-color: #0092fd;
    }
    &:nth-child(2),
    &:nth-child(3) {
        background-color: #42d7b5;
    }
    &:nth-child(4),
    &:nth-child(5) {
        background-color: #6dd400;
    }
    &:nth-child(6),
    &:nth-child(7) {
        background-color: #f8b501;
    }
    &:nth-child(8) {
        background-color: #f96300;
    }
}
</style>
