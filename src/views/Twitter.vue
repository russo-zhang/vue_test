<template>
    <div class="Twitter">
        <div class="timeline_wrap">
            <blockquote class="twitter-tweet">
                <a class="twitter-timeline" href="https://twitter.com/RiichiCity_JP?ref_src=twsrc%5Etfw"
                    ><br />Tweets by RiichiCity_JP<br
                /></a>
            </blockquote>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
    const twttr = (window as any).twttr;
    // 检查是否已经加载了Twitter的widgets.js脚本
    if (!twttr) {
        // 创建script元素
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        // 将script元素添加到文档中
        document.body.appendChild(script);

        // 监听脚本加载完成
        script.onload = () => {
            // 确保Twitter的widgets.js脚本的方法可用
            twttr.widgets.load();
        };
    } else {
        // 如果widgets.js已经加载，直接调用load方法
        twttr.widgets.load();
    }
});
</script>

<style lang="less" scoped>
.Twitter {
    .timeline_wrap {
        width: 60vw;
        margin: 10px auto;
        border: 3px solid #ccc;
    }
}
</style>
