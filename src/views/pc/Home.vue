<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/pc/layout/Header.vue";
import Footer from "@/components/pc/layout/Footer.vue";
export default defineComponent({
    name: "Home",
    components: {
        Header,
        Footer,
    },
});
</script>
<template>
    <div class="home">
        <Header></Header>
        <main>Home</main>
        <Footer></Footer>
    </div>
</template>
<style lang="less" scoped>
.home {
    overflow-x: hidden;
}
</style>
