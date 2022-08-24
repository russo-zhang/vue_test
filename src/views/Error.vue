<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
    name: "NotFound",
    setup() {
        const route = useRoute();
        const path = route.fullPath;
        return {
            path,
        };
    },
});
</script>
<template>
    <div class="NotFound">
        <main>
            <p><em>404.</em><span class="light">That’s an error.</span></p>
            <p>The requested URL {{ path }} was not found on this server.</p>
            <p class="light">That’s all we know.</p>
            <P>You may<router-link to="/"> back to home page</router-link></P>
        </main>
    </div>
</template>

<style lang="less" scoped>
.NotFound {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    main {
        margin-top: -100px;
        padding: 0 50px;
        p {
            line-height: 30px;
            a{
                &:hover{
                    text-decoration: underline;
                }
            }
        }
        em {
            font-weight: bold;
        }
        .light {
            color: #777;
        }
    }
}
</style>
