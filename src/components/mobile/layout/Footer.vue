<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Footer",
    setup() {
        return {};
    },
});
</script>
<template>
    <div class="Footer">
        <ul>
            <li><router-link to="/privacy-policy">{{$t("home.PrivacyPolicy")}}</router-link></li>
            <li><router-link to="/terms-of-service">{{$t("home.TermsOfService")}}</router-link></li>
            <li><router-link to="/community-rules">{{$t("home.CommunityRules")}}</router-link></li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.Footer {
}
</style>
