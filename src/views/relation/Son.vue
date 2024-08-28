<template>
    <div class="Son">
        <p>Son{{ data }}</p>
        <el-button @click="add">+</el-button>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, computed } from "vue";
const props = defineProps<{
    modelValue: any;
}>();
const emit = defineEmits(["update:modelValue"]);
const data = computed({
    get: () => props.modelValue,
    set: (value: any) => emit("update:modelValue", value),
});
const add = () => {
    data.value.num++;
};
</script>
