<template>
    <div class="Father">
        <el-button @click="fatherData.num++">+</el-button>
        <p>fatherData:{{ fatherData }}</p>
        <hr />
        <Son v-model="fatherData"></Son>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import Son from "./Son.vue";
const fatherData = reactive({
    num: 0,
});
</script>
