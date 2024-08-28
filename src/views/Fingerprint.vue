<template>
    <div class="Fingerprint">
        <h1>Fingerprint:{{ fingerprintjs2Value }}</h1>
        <h1>IP: {{ ipValue }}</h1>
        <hr />
        <ul>
            <li v-for="item in fingerprintjs2Arr" :key="item.key">{{ item.key }}:{{ item.value }}</li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import Fingerprint2 from "fingerprintjs2"; //
import { ref } from "vue";

const fingerprintjs2Value = ref("");
const fingerprintjs2Arr = ref([]);

const createBrowserFinger = () => {
    // 11820cab96d08ce81c8dc97258bd03a5
    const fingerprint = Fingerprint2.get((components: any) => {
        // 参数只有回调函数时，默认浏览器指纹依据所有配置信息进行生成
        const values = components.map((component: any) => component.value); // 配置的值的数组
        const murmur = Fingerprint2.x64hash128(values.join(""), 31); // 生成浏览器指纹
        console.log(components);
        console.log(values);
        console.log(murmur);
        localStorage.setItem("browserId", murmur); // 存储浏览器指纹，在项目中用于校验用户身份和埋点

        fingerprintjs2Value.value = murmur;
        fingerprintjs2Arr.value = components;
    });
};
createBrowserFinger();

async function getLocalIP() {
    return new Promise((resolve, reject) => {
        var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        var pc = new myPeerConnection({ iceServers: [] }),
            noop = function () {};
        var localIPs = {};
        pc.createDataChannel("");
        pc.createOffer()
            .then(function (sdp: any) {
                sdp.sdp.split("\n").forEach(function (line: any) {
                    if (line.indexOf("candidate") < 0) return;
                    line.match(ipRegex).forEach(function (ip: any) {
                        localIPs[ip] = true;
                    });
                });
                pc.setLocalDescription(sdp, noop, noop);
            })
            .catch(function (reason) {
                console.log(reason);
            });
        var ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
        var ips = Object.keys(localIPs);
        console.log("ips:", ips);
        console.log(ips[0]);
        return resolve(ips[0]);
    });
}
const ipValue = ref("");
getLocalIP()
    .then((ip: any) => {
        ipValue.value = ip;
    })
    .catch((error) => {
        ipValue.value = `Error: ${error}`;
    });
</script>

<style lang="less" scoped>
.Fingerprint {
    h1 {
        font-size: 32px;
    }
}
</style>
