<template>
    <div class="Fingerprint">
        <h1>Fingerprint:{{ fingerprintjs2Value }}</h1>
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
</script>

<style lang="less" scoped>
.Fingerprint {
    h1 {
        font-size: 32px;
    }
}
</style>
