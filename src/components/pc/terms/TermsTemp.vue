<script lang="ts">
import { defineComponent } from "vue";
import Header from "../layout/Header.vue";
export default defineComponent({
    name: "TermsTemp",
    components: { Header },
});
</script>
<template>
    <div class="TermsTemp">
        <Header></Header>
        <main>
            <nav>
                <router-link to="/PrivacyPolicy" :class="{ active: $route.name === 'PrivacyPolicy' }">{{ $t("home.p7") }}</router-link>
                <router-link to="/TermsOfService" :class="{ active: $route.name === 'TermsOfService' }">{{ $t("home.p8") }}</router-link>
                <router-link to="/CommunityRules" :class="{ active: $route.name === 'CommunityRules' }">{{ $t("home.p10") }}</router-link>
            </nav>
            <div class="terms_container">
                <slot></slot>
            </div>
        </main>
        <footer>
            <div class="policy">
                <router-link target="_blank" to="/PrivacyPolicy">{{ $t("home.p7") }} |&nbsp;</router-link>
                <router-link target="_blank" to="/TermsOfService">{{ $t("home.p8") }} |&nbsp;</router-link>
                <router-link target="_blank" to="/CommunityRules">{{ $t("home.p10") }} |&nbsp;</router-link>
                <div class="contact_us">
                    <span>{{ $t("home.p12") }}</span>
                    <a href="mailto:info@kktplus.com"> info@kktplus.com</a>
                </div>
            </div>
            <div class="copyright">Copyright © 2022, KKTPlus. All Rights Reserved.</div>
        </footer>
    </div>
</template>

<style lang="less" scoped>
.TermsTemp {
    main {
        display: flex;
        justify-content: center;
        // background-image: url("@/assets/pc/images/terms/background.jpg");
        padding: 65px 20px;
        nav {
            margin-right: 4px;
            a {
                display: block;
                width: 220px;
                height: 55px;
                line-height: 55px;
                text-align: center;
                font-size: 16px;
                background: rgb(102, 88, 61);
                color: #fff;
                margin-bottom: 2px;
                &:last-child {
                    margin-bottom: 0px;
                }
            }
            .active {
                background-color: rgb(255, 234, 127);
                color: rgb(51, 34, 0);
            }
        }
        .terms_container {
            max-width: 956px;
            min-height: 60vh;
            padding: 52px 44px;
            background: rgb(20, 20, 20);
            :deep(.terms) {
                p {
                    font-size: 14px;
                    margin-bottom: 10px;
                    line-height: 24px;
                    color: white;
                }
                h1 {
                    font-size: 34px;
                    color: rgb(255 234 127);
                    margin: 23px 0;
                }
                h2 {
                    margin: 30px 0px 20px 0px;
                    font-size: 28px;
                    color: rgb(255 234 127);
                }
            }
        }
    }
    footer {
        height: 94px;
        padding: 30px 0;
        text-align: center;
        font-size: 13px;
        color: #808080;
        background-color: #0e1213;
        .policy {
            display: flex;
            justify-content: center;
            margin-bottom: 8px;
            a {
                &:hover {
                    color: rgb(199, 193, 193);
                }
            }
        }
        .copyright {
        }
    }
}
</style>
