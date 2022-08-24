<script lang="ts">
import { defineComponent, computed } from "vue";
import TermsTempForPC from "@/components/pc/terms/TermsTemp.vue";
import TermsTempForMobile from "@/components/mobile/terms/TermsTemp.vue";
import { isMobile } from "@/utils";
export default defineComponent({
    name: "CommunityRules",
    components: {
        TermsTempForPC,
        TermsTempForMobile,
    },
    setup() {
        return {
            tempName: computed(() => {
                return isMobile() ? "TermsTempForMobile" : "TermsTempForPC";
            }),
        };
    },
});
</script>
<template>
    <component :is="tempName">
        <div class="terms CommunityRules">
            <h1 class="title" style="color: rgb(255 234 127)">Community Rules</h1>
            <p>
                These Community Rules govern your use of KKTPlus's Services and are incorporated into KKTPlus's Terms of Service. If there
                is any conflict between these Rules and the Terms of Service, the Terms of Service will prevail. The capitalized terms used
                in these Rules are defined in the Terms of Service. If you violate these Rules, we may take action against you or your
                Account, including immediate termination.
            </p>
            <h2>1. Follow the Law, KKTPlus's Terms of Service, Platform Terms of Service, and These Rules</h2>
            <p>You agree you will not, under any circumstances:</p>
            <p>
                A. Use the Services, intentionally or unintentionally, in violation or breach of any applicable law or regulation, or in a
                way that may put KKTPlus in violation or breach of any applicable law or regulation, or in a way that promotes the violation
                or breach of any applicable law or regulation.
            </p>
            <p>
                B. Engage in any act that KKTPlus deems in its sole discretion to be in conflict with the spirit or intent of the Services,
                including without limitation circumventing or manipulating the Terms of Service, these Community Rules, other Feature Terms,
                game rules, game mechanics, or other KKTPlus policies.
            </p>
            <p>You agree that you will:</p>
            <p>
                A. Abide by all terms and conditions of any third-party platform provider through which you access and/or use the KKTPlus
                Services, such as Google (each a “Platform”), including without limitation all terms that apply to any payment you make
                through any Platform. In the event of any conflict between these Rules and the applicable Platform's terms, the applicable
                Platform's terms prevail.
            </p>
            <h2>2. Account Creation and Use</h2>
            <p>The following rules govern the creation and use of your Account:</p>
            <p>
                A. You must not have more than one Account, per platform, at any given time; create an Account using a false identity or
                information; or create an Account on behalf of someone other than yourself.
            </p>
            <p>
                B. You must not sublicense, rent, lease, sell, trade, gift, bequeath, or otherwise transfer your Account to anyone without
                KKTPlus's written permission. Any such transfer or attempted transfer is prohibited and void.
            </p>
            <p>
                C. You must not sublicense, rent, lease, sell, trade or otherwise bequeath any Virtual Items associated with your Account to
                anyone without KKTPlus's written permission. Any such action or attempted action is prohibited and void.
            </p>
            <p>
                D. You must not access or use an Account that have been sublicensed, rented, leased, sold, traded, gifted, bequeathed, or
                otherwise transferred from the original Account creator without KKTPlus's written permission.
            </p>
            <p>
                E. You must not access or use Virtual Items that have been sublicensed, rented, leased, sold, traded, or otherwise
                bequeathed from the original Account creator without KKTPlus's written permission.
            </p>
            <h2>3. Improper Use of Others' Personal Information</h2>
            <p>You agree that you will not, under any circumstances:</p>
            <p>A. Try to unlawfully obtain login information or access Accounts belonging to any other player.</p>
            <p>B. Seek to collect, misuse, or disseminate any other user's content or non-public personal information.</p>
            <p>
                C. Upload or transmit, or attempt to upload or transmit, without KKTPlus's express written permission, any material that
                acts as a passive or active information collection or transmission mechanism, including without limitation web bugs,
                cookies, or other similar devices or technologies (sometimes referred to as “spyware,” “passive collection mechanisms” or
                “pcms,” or “malware”).
            </p>
            <h2>4. Offensive or Infringing Content</h2>
            <p>You agree that you will not, under any circumstances:</p>
            <p>
                A. Send messages with content or a link to content that is abusive, threatening, obscene, defamatory, or libelous; is
                racially, sexually, religiously, or otherwise objectionable or offensive; promotes or incites violence; or violates any
                applicable law or regulation.
            </p>
            <p>B. Send messages with content or a link to content that contains nudity, excessive violence, or offensive subject matter.</p>
            <p>
                C. Send messages with content or a link to content that infringes or violates someone else's intellectual property or other
                proprietary rights, or that discloses or aids in the disclosure of someone else's confidential information.
            </p>
            <p>
                D. Send messages with content or a link to content containing malicious content, including without limitation viruses,
                malware, or spyware.
            </p>
            <p>
                E. Harass, abuse, or harm, or advocate or incite harassment, abuse, or harm of another person or group, including without
                limitation KKTPlus's employees and customer service representatives.
            </p>
            <p>F. Impersonate any other person, including without limitation a KKTPlus employee.</p>
            <h2>5. Commercial Activity</h2>
            <p>You agree that you will not, under any circumstances:</p>
            <p>
                A. Use the Services for any unauthorized commercial purpose, including but not limited to (1) communicating a commercial
                advertisement or facilitating a commercial transaction, including without limitation spamming other players; (2) offering or
                soliciting Accounts for sale or transfer; (3) offering or soliciting Virtual Items for sale; or (4) soliciting donations or
                contributions to any personal or charitable cause.
            </p>
            <p>
                B. Use the Services for performing in-game services, such as power-leveling and item-collection services, in exchange for
                payment outside the Services.
            </p>
            <h2>6. Unauthorized Use of or Connection to the Services</h2>
            <p>You agree that you will not, under any circumstances:</p>
            <p>
                A. Design, use, distribute, or sell cheats, exploits, automation software, bots, hacks, mods, or any unauthorized
                third-party or other software designed to modify or interfere with the Services or any KKTPlus game experience.
            </p>
            <p>
                B. Institute, execute, assist, encourage, or become involved in any type of attack on the Services, including without
                limitation distribution of malware, making a denial-of-service attack, or any other attempt to disrupt the Services or any
                other person's use or enjoyment of the Services.
            </p>
            <p>
                C. Try to gain unauthorized access to the Services, Accounts registered to others, or to any computer or server used to
                offer or support the Services or any KKTPlus game environment or network connected to the Services by any means other than
                the user interface provided by KKTPlus, including without limitation by circumventing or modifying or causing to be
                modified, attempting to circumvent or modify, or encouraging or assisting any other person to circumvent or modify, any
                security, technology, device, file, or software that is part of the Services.
            </p>
            <p>
                D. Use, facilitate, create, or maintain any unauthorized connection to the Services, including without limitation (1) any
                connection to any unauthorized server that emulates, or attempts to emulate any part of the Services; or (2) any connection
                using programs, tools, or software not expressly approved by KKTPlus.
            </p>
            <p>
                E. Use any unauthorized third-party or other software that accesses, intercepts, “mines,” or otherwise collects information
                from or through the Services or that is in transit from or to the Services, including without limitation any software that
                reads areas of RAM or streams of network traffic used by the Services to store information about KKTPlus game characters,
                elements, or environments. KKTPlus may, at its sole and absolute discretion, allow the use of certain third-party user
                interfaces.
            </p>
            <p>
                F. Intercept, examine, or otherwise observe any proprietary communications protocol used by a client, a server, or the
                Services, whether through the use of a network analyzer, packet sniffer, or any other tools.
            </p>
            <p>
                G. Make any automated use of the Services or take any action that imposes or may impose (in our sole discretion) an
                unreasonable or disproportionately large load on our infrastructure.
            </p>
            <p>
                H. Bypass any robot exclusion headers or other measures we employ to restrict access to the Services or use any software,
                technology, or device to send content or messages, scrape, spider, or crawl the Services, or harvest or manipulate data.
            </p>
            <p>
                I. Interfere or try to interfere with the proper functioning of the Services, or connect to or use the Services in any way
                not expressly permitted by the Terms of Service, Feature Terms, or these Rules, including without limitation disrupting,
                overburdening, or assisting in the disruption or overburdening of the Services.
            </p>
            <p>
                J. Make improper use of KKTPlus's customer support services, including by submitting false abuse reports or using profane or
                abusive language in communications with our support personnel.
            </p>
            <p>
                K. Except where permitted by law or relevant open source licenses, modify, reverse engineer, decompile, disassemble,
                decipher, or otherwise try to derive the source code from us, or to obtain any information from the Services using any
                method not expressly permitted by KKTPlus.
            </p>
            <p>
                L. Copy, modify, or distribute content from any KKTPlus game, site, or Service or content protected by KKTPlus's copyrights,
                trademarks, or other intellectual property rights, or use any method to copy or distribute any content in the Services
                except with KKTPlus's written permission.
            </p>
        </div>
    </component>
</template>
