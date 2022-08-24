<template>
    <div class="home">
        <Header></Header>
        <main>
            <div v-if="isIOS">IOS</div>
            <div v-else>Android</div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, computed } from "vue";
import Header from "@/components/mobile/layout/Header.vue";
import Footer from "@/components/mobile/layout/Footer.vue";
import { isIOS } from "@/utils";
export default defineComponent({
    name: "HomeView",
    components: {
        Header,
        Footer,
    },
    setup() {
        return {
            isIOS,
        };
    },
});
</script>
<style lang="less" scoped>
main {
}
</style>
