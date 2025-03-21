<template>
    <div class="browserinfo">
        <main>
            <h1>浏览器内核信息</h1>
            <hr />
            <h2>客户端信息</h2>
            <ul>
                <li v-for="item in client" :key="item.key">{{ item.key }}: {{ item.value || "-" }}</li>
            </ul>
            <hr />
            <h2>操作系统信息</h2>
            <ul>
                <li v-for="item in os" :key="item.key">{{ item.key }}: {{ item.value || "-" }}</li>
            </ul>
            <hr />
            <h2>设备信息</h2>
            <ul>
                <li v-for="item in deviceInfo" :key="item.key">{{ item.key }}: {{ item.value || "-" }}</li>
            </ul>
            <h2>navigator</h2>
            <ul>
                <li>userAgent: {{ navigatorInfo.userAgent }}</li>
                <li>platform: {{ navigatorInfo.platform }}</li>
                <li>appVersion: {{ navigatorInfo.appVersion }}</li>
                <li>vendor: {{ navigatorInfo.vendor }}</li>
                <li>product: {{ navigatorInfo.product }}</li>
                <li>productSub: {{ navigatorInfo.productSub }}</li>
                <li>vendorSub: {{ navigatorInfo.vendorSub }}</li>
                <li>language: {{ navigatorInfo.language }}</li>
                <li>languages: {{ navigatorInfo.languages }}</li>
                <li>cookieEnabled: {{ navigatorInfo.cookieEnabled }}</li>
                <li>onLine: {{ navigatorInfo.onLine }}</li>
                <li>doNotTrack: {{ navigatorInfo.doNotTrack }}</li>
            </ul>
        </main>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import DeviceDetector from "device-detector-js";
// 设备检测
const deviceDetector = new DeviceDetector();
const device: any = deviceDetector.parse(navigator.userAgent);
console.log("device.os?.name:", device.os?.name);
console.log("device:", device);
const client = ref<any[]>([]);
const os = ref<any[]>([]);
const deviceInfo = ref<any[]>([]);
for (const key in device.client) {
    client.value.push({ key, value: device.client[key] });
}
for (const key in device.os) {
    os.value.push({ key, value: device.os[key] });
}
for (const key in device.device) {
    deviceInfo.value.push({ key, value: device.device[key] });
}
const navigatorInfo = window.navigator;
</script>

<style lang="less" scoped>
.browserinfo {
    main {
        width: 600px;
        margin: 0 auto;
    }
}
</style>
