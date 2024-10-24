<template>
    <div class="Msg">
        <el-button @click="handleClick">asdasdf</el-button>
    </div>
</template>
<script lang="ts" setup>
Notification.requestPermission();
// let notification: Notification;
const handleClick = () => {
    const notification = new Notification("检测工单", {
        body: "您有新的检测工单待审核哦",
        icon: "/favicon.png", // "图标路径，若不指定默认为favicon"
    });
    notification.onclick = function (event) {
        event.preventDefault(); // 防止浏览器默认行为
        // 在这里定义点击通知后的动作，例如打开一个新的窗口或标签页
        window.open("http://localhost:8080/msg");
    };
    console.log("notification:", notification);
};
</script>

<style lang="less" scoped>
.Msg {
}
</style>
