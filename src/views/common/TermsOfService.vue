<script lang="ts">
import { defineComponent, computed } from "vue";
import TermsTempForPC from "@/components/pc/terms/TermsTemp.vue";
import TermsTempForMobile from "@/components/mobile/terms/TermsTemp.vue";
import { isMobile } from "@/utils";
export default defineComponent({
    name: "TermsOfService",
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
        <div class="terms TermsOfService">
            <h1 class="title" style="color: rgb(255 234 127)">Terms of Service</h1>
            <p>
                KKTPlus's mission is to drive the development of a classic mobile game to a brand-new level with our advanced technology and
                marketing strengths. We have provided millions of card games lovers with unique and reliable service on the mobile end.
            </p>
            <p>
                Please read these Terms of Service and our Privacy Policy before using KKTPlus's Services. These Terms of Service set out
                the terms and conditions that apply when you use our Services (described below). When you use our Services, you agree to be
                bound by these terms and conditions. If you don't agree to all the terms and conditions, you must not use our Services.
            </p>
            <p>
                Our Privacy Policy describes how we collect, store, use, and disclose your personal information when providing our Services
                to you, and your rights and choices concerning your information. When you use our Services, you acknowledge that our Privacy
                Policy applies. If you do not want KKTPlus to collect, store, use, or share your information in the ways described in our
                Privacy Policy, you must not use our Services.
            </p>
            <p>
                “KKTPlus,” “we,” “our,” or “us” means KKTPlus and KKTPlus Corporate Family. In all cases, “KKTPlus,” “we,” “our,” or “us”
                includes agents, consultants, employees, officers, and directors.
            </p>
            <h2>1. DEFINITIONS</h2>
            <p>“Account” means an account you create when you access the Services.</p>
            <p>
                “Community Rules” means the rules of conduct that govern your interaction with our Services and other players, which can be
                found here.
            </p>
            <p>
                “Feature Terms” means any other rules related to specific services, like platforms and APIs, applications for mobile
                devices, forums, contests, subscriptions or loyalty programs that we may publish, which apply to your use of those specific
                services and state they are part of these Terms.
            </p>
            <p>
                “Offers” means special programs, including offers, excursions, and special gifts, that KKTPlus may offer from time to time
                to certain eligible players.
            </p>
            <p>
                “Services” means our games, products, services, content, http://kktplus.com, and/or other domains or websites operated by
                KKTPlus.
            </p>
            <p>“Terms of Service” or “Terms” means these terms of service.</p>
            <p>“User Content” means all the data that you upload, transmit, create, or generate on or through the Services.</p>
            <p>
                “Virtual Items” means (a) virtual currency, including without limitation virtual coins, cash, tokens, or points, all for use
                in the Services and (b) virtual in-game items.
            </p>
            <p>
                “KKTPlus Corporate Family” means KKTPlus's subsidiaries, parent companies, joint ventures, and other corporate entities
                under common ownership and their agents, consultants, employees, officers, and directors.
            </p>
            <p>
                “KKTPlus Affiliates” refers to the KKTPlus Corporate Family plus KKTPlus's and the KKTPlus Corporate Family's third-party
                content providers, distributors, licensees, or licensors.
            </p>
            <h2>2. CHANGES TO THESE TERMS</h2>
            <p>
                We reserve the right, at our discretion, to change, modify, add, or remove portions of the Terms, Community Rules, or
                Feature Terms at any time by posting the amended Terms, Community Rules, or Feature Terms on our sites or within the
                Services (such as through in-game notices). We may provide additional notice, such as an e-mail message or messaging within
                the Services, of any material changes. Unless we state otherwise, changes are effective when posted. New versions of the
                Terms, Community Rules, and Feature Terms, and any other policies, codes, or rules will be accessible at http://kktplus.com
                or from within the Services. If you continue to use the Services after the changes are posted, you are agreeing that the
                changes apply to your continued use of the Services.
            </p>
            <p>
                If you have a dispute with KKTPlus, the version of the Terms, Community Rules, and Feature Terms in effect at the time
                KKTPlus received actual notice of the dispute will apply to such dispute.
            </p>
            <p>
                If the Terms or our Privacy Policy have any provisions or information that conflict with other KKTPlus terms or policies,
                these Terms and the Privacy Policy as applicable shall govern.
            </p>
            <h2>3. ACCOUNT INFORMATION AND SECURITY</h2>
            <p>
                In order to use our Services, we may ask you to create an Account and select a password and/or provide us with certain
                personal information. This information will be held and used in accordance with KKTPlus's Privacy Policy.
            </p>
            <p>You agree to supply KKTPlus with accurate, complete, and up-to-date information, particularly your email address.</p>
            <p>
                You are responsible for maintaining the security of your Account. Don't share your Account details with others or allow
                others to access or use your Account. We will treat all acts performed through your Account as being performed by you. You
                therefore accept responsibility for all acts done using your Account, whether or not authorized by you, including purchases
                made, and you understand you may be held liable for losses incurred by us or any other user of the Services caused by
                someone else using your Account.
            </p>
            <p>
                If you become aware of any actual or suspected loss, theft, fraud, or unauthorized use of your Account or Account password,
                please tell us immediately.
            </p>
            <h2>4. USING OUR SERVICES</h2>
            <p>Who can use our Services</p>
            <p>We are excited to have you start playing our games, but there are some limits on who can use our Services.</p>
            <p>You may not use our Services if:</p>
            <p>• You cannot enter into a binding contract with KKTPlus.</p>
            <p>
                • You are under 13 years of age, in which case you must not create an Account, use any of our Services, or submit personal
                information in the Services or to KKTPlus (for example, your name, address, telephone number, or email address). This
                prohibition does not apply if, and only if, a KKTPlus Service has an age-gate that collects age information before allowing
                a user to proceed and that age-gate allows users who identify themselves as under 13 years of age to use the Service. (As
                described in our Privacy Policy, in those instances, we will either provide a version of that Service that does not collect,
                use, or disclose personal information, except where and to the extent permitted by applicable data protection laws,
                including without limitation the Children's Online Privacy Protection Act, or obtain legally valid parental consent.)
            </p>
            <p>
                • You are not allowed to receive products, including services or software, from the United States, for example if you are
                located in a country embargoed by the United States or if you are on the U.S. Treasury Department's list of Specially
                Designated Nationals.
            </p>
            <p>• You are a convicted sex offender.</p>
            <p>
                • You have previously been banned from playing any KKTPlus game or using any KKTPlus Service, unless KKTPlus has reversed
                that ban, in its sole discretion.
            </p>
            <p>
                If you are under the age of 18, or under the age of majority where you are located, YOU REPRESENT THAT YOUR LEGAL GUARDIAN
                HAS REVIEWED AND AGREED TO THESE TERMS.
            </p>
            <p>Additional Important Rules and Terms</p>
            <p>
                If you use our Services, you must follow the KKTPlus Community Rules and all other Feature Terms that may apply. These
                additional rules and terms apply in addition to these Terms and are important. Please read them. If you access the Services
                from a social network, such as Facebook, or download the Services from Google, you must also comply with that third party's
                terms of service/use as well as these Terms.
            </p>
            <p>Accessing our Services</p>
            <p>
                To access or play our games or create an Account with us, you may need an account with a social network, like Facebook, and,
                if you are using our mobile Services, an account with the company that provides your mobile applications. You may need to
                update third-party software from time to time to receive the Services and play KKTPlus's Games.
            </p>
            <p>
                We provide the games and other Services. You provide the equipment (phone, or tablet, etc.) and pay any fees to connect to
                the Internet and app stores, and for data or cellular usage to download and use the Services.
            </p>
            <p>Service Changes and Limitations</p>
            <p>
                Our Services are evolving and we may require that you accept updates to the Services as well as to the Terms, Community
                Rules, Feature Rules, and the KKTPlus Privacy Policy. From time to time we may make you update the game or your software to
                continue to use our Services. We may perform these updates remotely, including to KKTPlus software residing on your mobile
                device, without notifying you.
            </p>
            <p>
                KKTPlus reserves the right to stop offering and/or supporting the Services or a particular game or part of the Services at
                any time either permanently or temporarily, at which point your right to use the Services or any part of them will be
                automatically terminated or suspended. If that happens, unless applicable law requires otherwise, KKTPlus is not required to
                provide refunds, benefits, or other compensation to you in connection with discontinued elements of the Services or for
                Virtual Items previously earned or purchased.
            </p>
            <p>
                KKTPlus MAY, IN ITS SOLE DISCRETION, LIMIT, SUSPEND, TERMINATE, MODIFY, OR DELETE ACCOUNTS OR ACCESS TO THE SERVICES OR ANY
                PORTION OF THEM; PROHIBIT ACCESS TO OUR GAMES AND SITES, AND THEIR CONTENT, SERVICES, AND TOOLS; OR DELAY OR REMOVE HOSTED
                CONTENT, AND KKTPlus IS UNDER NO OBLIGATION TO COMPENSATE YOU FOR ANY LOSSES OR RESULTS.
            </p>
            <p>Deleting your Account</p>
            <p>
                You may stop using our Services at any time and may request that we delete your Account at any time by following the
                instructions in our Privacy Policy. Unless applicable law requires otherwise, we are not required to provide refunds,
                benefits, or other compensation if you request deletion of your Account.
            </p>
            <h2>5. OWNERSHIP; LIMITED LICENSE</h2>
            <p>Games and Services</p>
            <p>
                The Services are comprised of works that are owned or licensed by KKTPlus, and they are protected by copyright, trademark,
                trade dress, patent, and other worldwide intellectual property rights and other applicable laws, rules, or regulations. All
                such rights are reserved. These Terms do not grant you or any other party any right, title, or interest in the Services or
                any content in the Services.
            </p>
            <p>
                So long as you abide by these Terms and any other rules, including the Community Rules and any Feature Terms, you may use
                the Services subject to these Terms, for your own non-commercial, entertainment purposes. You agree not to use the Services
                for any other purpose and agree that KKTPlus will have no liability to you for any damage or loss arising from unauthorized
                uses.
            </p>
            <p>
                If you breach these Terms, or any of our other terms that apply to you, we may take action against you, up to and including
                terminating your account. In addition, you may be breaking the law, including breaches or violations of KKTPlus's
                intellectual property rights. ANY ATTEMPT BY YOU TO DISRUPT OR INTERFERE WITH THE SERVICES, INCLUDING WITHOUT LIMITATION
                UNDERMINING OR MANIPULATING THE LEGITIMATE OPERATION OF ANY KKTPlus GAME, IS A BREACH OF KKTPlus POLICY AND MAY BE A BREACH
                OR VIOLATION OF CRIMINAL AND CIVIL LAWS.
            </p>
            <p>Your Account and Virtual Items</p>
            <p>
                Regardless of any other statement in these Terms, the Community Rules, or any Feature Terms that apply to features you may
                choose to use, you do not own any Account that you create on our Services, including in our games, and your Account is not
                your property. Likewise, you do not own any Virtual Items that you obtained through our Services, regardless of whether you
                “earned” those Virtual Items or “purchased” them. Your Account and any related Virtual Items are owned by KKTPlus. KKTPlus
                gives you a limited license and right to use your Account and the related Virtual Items while we offer the Services.
            </p>
            <p>
                TO AVOID RETAINING DATA THAT IS NO LONGER NEEDED AND/OR TO IMPROVE OUR SERVICES, WE MAY DELETE OR TERMINATE ACCOUNTS THAT
                ARE INACTIVE (I.E., NOT LOGGED INTO) FOR 180 DAYS.
            </p>
            <p>
                You are not allowed to transfer Virtual Items outside of the Services (e.g., in the “real world”), for example by selling,
                gifting, or trading them. We won't recognize those transfers as legitimate. You are not allowed to sublicense, trade, sell,
                or attempt to sell Virtual Items for “real” money, or exchange Virtual Items for value of any kind outside of a game. Any
                such transfer or attempted transfer is prohibited and void, and we may terminate your Account because of it.
            </p>
            <p>User Content</p>
            <p>If you post, publish, transmit, or upload User Content on the Services, you agree that it will be:</p>
            <p>1. accurate;</p>
            <p>2. not confidential;</p>
            <p>3. not in violation of law;</p>
            <p>
                4. not in violation of contractual restrictions or other parties' rights, and that you have permission to use the User
                Content from any other party whose personal or other information or intellectual property is contained within the User
                Content;
            </p>
            <p>5. free of viruses, adware, spyware, worms, or other malicious code;</p>
            <p>6. in compliance with our Community Rules.</p>
            <p>
                Your User Content will be processed by KKTPlus in accordance with our Privacy Policy. You are solely responsible for
                securing and backing up your content.
            </p>
            <p>
                Any User Content that you post, publish, or transmit will be considered non-proprietary and non-confidential. You retain all
                of your ownership rights in your User Content, but you give KKTPlus a perpetual and irrevocable (other than as provided
                below or in our Privacy Policy), worldwide, royalty free, non-exclusive, license to use, reproduce, distribute, prepare
                derivative works of, display, and perform your User Content and any modified and derivative works thereof in connection with
                the Services, including in marketing and promotions. To the extent allowed by applicable laws, you waive any moral rights
                you may have in any User Content (like the right to be identified as the author of the User Content or the right to object
                to a certain use of that User Content).
            </p>
            <p>
                We have the right to remove any of your User Content if, in our opinion, it does not comply with these Terms, our Community
                Rules, or any applicable Feature Terms. We also have the right to disclose your identity to any third party who is claiming
                that any of your User Content constitutes a breach of their intellectual property rights or their right to privacy. We will
                also disclose your User Content to other third parties or government bodies where we are legally required to do so.
            </p>
            <p>
                KKTPlus's license to your User Content ends when you request deletion of your Account by submitting a request through our
                Personal Data Request Portal as described in our Privacy Policy, with the following exceptions:
            </p>
            <p>
                1. User Content submitted in response to KKTPlus promotions, which will be subject to any Feature Terms or other terms of
                the promotion;
            </p>
            <p>
                2. User Content either shared with others, which they have not deleted or already used publicly as allowed under these
                Terms; and
            </p>
            <p>3. User Content subject to a separate license with KKTPlus, which will be subject to the terms of such license.</p>
            <p>
                If you request deletion of your User Content we will take reasonable steps to remove your User Content from active use,
                which may include suppression of your User Content in our systems. However, User Content may persist in our systems,
                including in back-up copies. We may also retain copies of User Content if we reasonably believe it is legally required.
            </p>
            <p>
                When you post, publish, or transmit your observations and comments on the Services, such as in forums, blogs, and chat
                features, we cannot guarantee that other players will not use the ideas and information that you share. If you have an idea
                or information that you would like to keep confidential and/or don't want others to use, don't post it. KKTPlus IS NOT
                RESPONSIBLE FOR ANY OTHER PERSON'S USE OR APPROPRIATION OF ANY CONTENT OR INFORMATION YOU POST, PUBLISH, OR TRANSMIT IN ANY
                FORUMS, BLOGS, OR CHAT ROOMS.
            </p>
            <h2>6. MONITORING USE OF SERVICES AND USER CONTENT</h2>
            <p>
                We have no obligation to monitor the Services for inappropriate or illegal User Content or the conduct of other players. We
                also are not responsible for information, materials, products, or services provided by other players (for instance, in their
                profiles) and User Content is not approved by us. However, if someone is violating these Terms or misusing the Services,
                please let us know by contacting us at Customer Support.
            </p>
            <p>
                While we have no obligation to monitor the Services, we have the right, in our sole discretion, to monitor, record, or store
                your interactions with the Services or your communications with KKTPlus or other player when you are using the Services. For
                more information, see our Privacy Policy. We may also, at our discretion, choose to edit, refuse to post, or remove any User
                Content. If we determine that your communications or User Content violate these Terms, Feature Terms, or Community Rules, we
                have the right, in our sole discretion and without notice, to disable your ability to post User Content or to communicate
                with other players, or we may terminate your access to the Services entirely.
            </p>
            <h2>7. YOUR DEALINGS WITH OTHER PLAYERS</h2>
            <p>
                You are responsible for your interactions with other players. If you have a problem with another player, we are not required
                to get involved, but we can if we desire.
            </p>
            <p>
                If you have a dispute with another player, you release KKTPlus, the KKTPlus Corporate Family, and all KKTPlus Affiliates
                from responsibility, claims, demands, and/or damages (actual or consequential) of every kind and nature, whether known or
                unknown, resulting from that dispute or connected to that dispute. This includes damages for loss of profits, goodwill, use,
                or data.
            </p>
            <p>
                We may allow you to use the Services to initiate SMS or MMS text messages to your friends, family, or other contacts. You
                are not required to send such text messages, you are solely responsible for them, and you understand that standard text
                messaging and data rates may apply based on your plan with your mobile phone carrier. You also understand that KKTPlus does
                not control the recipients, content, or timing of these text messages. If you choose to send text messages through the
                Services, you represent and warrant to us that the recipients of the text messages have appropriately consented to receive
                the text messages.
            </p>
            <h2>8. PAYMENT TERMS</h2>
            <p>
                We provide a service in the form of access to games, Virtual Items, and our other Services. In the Services you may use
                “real world” money to obtain a limited license and right to use Virtual Items and/or other goods or services.
            </p>
            <p>How it Works</p>
            <p>
                You get a limited license and right to use Virtual Items by visiting the purchase page in one of our games or Services and
                providing billing authorization through the platform on which you are playing (e.g. Google).
            </p>
            <p>
                When you purchase Virtual Items in our games on platforms such as Google, KKTPlus is not a party to the transaction and your
                purchase will be governed by the third-party platform's payment terms and conditions. Please review the platform's terms of
                service for additional information. You can also contact our Billing Support team as described below for questions
                concerning refunds of purchases made through Google.
            </p>
            <p>
                For Virtual Items, your order will represent an offer to us to obtain a limited license and right to use the relevant
                Service(s) or Virtual Item(s) that will be accepted by us when we accept payment. At that point, the limited license begins.
            </p>
            <p>
                For orders to obtain a limited license and right to use Virtual Items, by clicking the purchase/order button on the purchase
                window or page you agree that we will supply the Virtual Items to you as soon as we have accepted your order.
            </p>
            <p>
                You understand that while you may “earn,” “buy,” or “purchase” Virtual Items in our Services, you do not legally “own” the
                Virtual Items and the amounts of any Virtual Item do not refer to any credit balance of real currency or its equivalent. Any
                “virtual currency” balance shown in your Account does not constitute a real-world balance or reflect any stored value, but
                instead constitutes a measurement of the extent of your limited license.
            </p>
            <p>
                ALL SALES ARE FINAL: YOU ACKNOWLEDGE THAT KKTPlus IS NOT REQUIRED TO PROVIDE A REFUND FOR ANY REASON, AND THAT YOU WILL NOT
                RECEIVE MONEY OR OTHER COMPENSATION FOR UNUSED VIRTUAL ITEMS WHEN AN ACCOUNT IS CLOSED, WHETHER SUCH CLOSURE WAS VOLUNTARY
                OR INVOLUNTARY, OR WHETHER YOU MADE A PAYMENT THROUGH PLATFORM SUCH AS GOOGLE, OR ANY OTHER SITES OR PLATFORMS WHERE WE
                OFFER OUR SERVICES.
            </p>
            <p>
                PURCHASES TO ACQUIRE A LIMITED LICENSE AND RIGHT TO USE VIRTUAL ITEMS ARE NON-REFUNDABLE TO THE FULLEST EXTENT ALLOWED BY
                LAW.
            </p>
            <p>Additional Payment Terms</p>
            <p>
                You agree to pay all fees and applicable taxes incurred by you or anyone using an Account registered to you. KKTPlus may
                revise the pricing for the goods and services it licenses to you through the Services at any time.
            </p>
            <p>Customer Support</p>
            <p>
                For any customer assistance (i.e. technical issues, game play, or in-game purchasing questions), you may contact us through
                Customer Support.
            </p>
            <h2>9. PROMOTIONS AND OFFERS</h2>
            <p>
                From time to time, we may offer limited-time promotions. Please review the official rules or Feature Terms (if any)
                associated with any promotion. They will apply in addition to these Terms.
            </p>
            <p>
                In addition, from time to time, we may promote Offers. We are not required to give, and you are not required to accept, any
                Offer. Offers are not transferable, redeemable, or exchangeable for other things of value, except at our sole discretion. If
                you accept any Offer, you may have to sign a declaration of eligibility and liability release or other paperwork to receive
                the Offer. Some Offers will be subject to taxes and other charges, travel, or activities outside of the virtual world, all
                of which will be disclosed before you accept the offer. If you accept any Offer, you assume all liability associated with
                the Offer.
            </p>
            <h2>10. THIRD-PARTY ADVERTISING</h2>
            <p>
                Our Services may feature advertisements from us or other companies. Our Privacy Policy explains what information we share
                with advertisers. Please read it.
            </p>
            <p>
                Sometimes we provide links in our games or on the Services to other third-party companies' websites or to companies who
                invite you to participate in a promotional offer and offer you some feature of the Services or upgrade (such as in-game
                currency) in exchange. Any charge or obligation you take on in dealing with these other companies is your responsibility.
            </p>
            <p>
                We are not responsible for any third-party website that we link to in our Services, and such a link does not mean we endorse
                or approve that linked site or any information you obtain from it. We are not liable for any claim relating to any content,
                goods, and/or services of third parties.
            </p>
            <p>
                Please also note that the linked third-party sites are not under our control and may collect data or ask you to provide them
                with personal or other information, or they may automatically collect information from you. When you use these third-party
                sites and services, the third-party company may (or may not) ask you for permission to access your information and content.
                We are not responsible for these other companies' content, business practices, or privacy policies, or for how they collect,
                use, or share the information they get from you.
            </p>
            <h2>11. COPYRIGHT NOTICES/COMPLAINTS</h2>
            <p>
                We respect the intellectual property rights of others and ask that you do, as well. We respond to notices of alleged
                copyright infringement that comply with the US Digital Millennium Copyright Act (“DMCA”), the E-Commerce Directive and
                associated legislation in the EU, and similar or equivalent other local laws that may apply. We reserve the right to
                terminate any player's access to the Services if we determine that the player is a “repeat infringer.” We do not have to
                notify the player before we do this.
            </p>
            <h2>12. FEEDBACK AND UNSOLICITED IDEAS</h2>
            <p>
                We may request your feedback on certain features through a promotion or our customer insights program. You are not obliged
                to respond to our request. Any feedback you provide at our request through a promotion or program is subject to the rules of
                the specific promotion or program. And any idea, information, or feedback you submit to us voluntarily is subject to our
                Unsolicited Ideas Policy.
            </p>
            <h2>13. AVAILABILITY OF THE SERVICES; WARRANTY DISCLAIMER</h2>
            <p>
                KKTPlus, the KKTPlus Corporate Family, and the KKTPlus Affiliates make no promises or guarantees that the Services or any
                content on them will always be available, uninterrupted, or error-free. We may suspend, withdraw, or restrict the
                availability of all or any part of our Services for business and operational reasons.
            </p>
            <p>
                USE OF THE SERVICES IS AT YOUR SOLE RISK. THEY ARE PROVIDED ON AN “AS IS” BASIS. TO THE EXTENT PERMITTED BY APPLICABLE LAW,
                KKTPlus, THE KKTPlus CORPORATE FAMILY, AND THE KKTPlus AFFILIATES MAKE NO WARRANTIES, CONDITIONS, OR OTHER TERMS OF ANY
                KIND, EITHER EXPRESS OR IMPLIED, ABOUT THE SERVICES. KKTPlus, THE KKTPlus CORPORATE FAMILY, AND THE KKTPlus AFFILIATES
                DISCLAIM ANY WARRANTIES OF TITLE OR IMPLIED WARRANTIES, CONDITIONS, OR OTHER TERMS OF NON-INFRINGEMENT, MERCHANTABILITY,
                QUIET ENJOYMENT, OR FITNESS FOR A PARTICULAR PURPOSE.
            </p>
            <p>
                If your state or country does not allow these disclaimers, they do not apply to you. If your state or country requires a
                certain period for which a warranty applies, it will be either the shorter of 30 days from your first use of the Services or
                the shortest period required by law.
            </p>
            <h2>14. LIMITATIONS; WAIVER OF LIABILITY</h2>
            <p>YOU ACKNOWLEDGE THAT KKTPlus, THE KKTPlus CORPORATE FAMILY, AND THE KKTPlus AFFILIATES ARE NOT LIABLE</p>
            <p>
                (1) FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, INCLUDING FOR LOSS OF PROFITS, GOODWILL, OR
                DATA, IN ANY WAY WHATSOEVER ARISING OUT OF THE USE OF, OR INABILITY TO USE, THE SERVICES; OR
            </p>
            <p>(2) FOR THE CONDUCT OF THIRD PARTIES, INCLUDING OTHER USERS OF THE SERVICES AND OPERATORS OF EXTERNAL SITES.</p>
            <p>
                THE RISK OF USING THE SERVICES AND EXTERNAL SITES RESTS ENTIRELY WITH YOU AS DOES THE RISK OF INJURY FROM THE SERVICES AND
                EXTERNAL SITES.
            </p>
            <p>
                TO THE FULLEST EXTENT ALLOWED BY ANY LAW THAT APPLIES, THE DISCLAIMERS OF LIABILITY IN THESE TERMS APPLY TO ALL DAMAGES OR
                INJURY CAUSED BY THE SERVICES, OR RELATED TO USE OF, OR INABILITY TO USE, THE SERVICES, UNDER ANY CAUSE OF ACTION IN ANY
                JURISDICTION, INCLUDING, WITHOUT LIMITATION, ACTIONS FOR BREACH OF WARRANTY, BREACH OF CONTRACT, OR TORT (INCLUDING
                NEGLIGENCE).
            </p>
            <p>
                TO THE MAXIMUM EXTENT PERMISSIBLE UNDER APPLICABLE LAWS, THE TOTAL LIABILITY OF KKTPlus, THE KKTPlus CORPORATE FAMILY,
                AND/OR THE KKTPlus AFFILIATES IS LIMITED TO THE TOTAL AMOUNT YOU HAVE PAID KKTPlus, THE KKTPlus CORPORATE FAMILY, AND/OR THE
                KKTPlus AFFILIATE IN THE ONE HUNDRED AND EIGHTY DAYS (180) DAYS IMMEDIATELY PRECEDING THE DATE ON WHICH YOU FIRST ASSERT ANY
                SUCH CLAIM.
            </p>
            <p>
                IF YOU HAVE NOT PAID KKTPlus, THE KKTPlus CORPORATE FAMILY, OR ANY KKTPlus AFFILIATE ANY AMOUNT IN THE ONE HUNDRED AND
                EIGHTY DAYS (180) DAYS IMMEDIATELY PRECEDING THE DATE ON WHICH YOU FIRST ASSERT ANY SUCH CLAIM, YOUR SOLE AND EXCLUSIVE
                REMEDY FOR ANY DISPUTE WITH KKTPlus, THE KKTPlus CORPORATE FAMILY, AND/OR ANY KKTPlus AFFILIATE IS TO STOP USING THE
                SERVICES AND TO CANCEL YOUR ACCOUNT.
            </p>
            <p>
                Some states or countries do not allow the exclusion of certain warranties or the limitations/exclusions of liability
                described above, which means these limitations/exclusions may not apply to you if you reside in one of those states or
                countries.
            </p>
            <h2>15. APPLICABLE LAW</h2>
            <p>These Terms and our relationship will be governed by English law.</p>
            <h2>16. VENUE FOR LEGAL DISPUTES NOT SUBJECT TO ARBITRATION</h2>
            <p>
                Judicial proceedings must be brought in the courts of England and Wales, unless the parties all agree to some other
                location. You, KKTPlus, and the KKTPlus Corporate Family all consent to venue and personal jurisdiction in England and
                Wales.
            </p>
            <h2>17. SEPARATION OF TERMS</h2>
            <p>
                Each of the paragraphs of these Terms operates separately. If any part of these Terms, Feature Terms, or Community Rules is
                not enforceable, the rest of these Terms, Feature Terms, and Community Rules still apply and are binding, and any
                unenforceable term will be substituted with a term that comes as economically close to the unlawful or unenforceable term as
                possible.
            </p>
            <h2>18. ASSIGNMENT</h2>
            <p>
                We may give our rights, or our obligations, under these Terms, Feature Terms, or Community Rules to any person or entity at
                any time with or without your consent. You may not give your rights or your obligations under these Terms, Feature Terms, or
                Community Rules to anyone without first getting KKTPlus's written consent, and any attempt to do so without our consent is
                void.
            </p>
            <h2>19. ENTIRE AGREEMENT</h2>
            <p>
                These Terms, and any other policies or rules we reference in these Terms, make up the entire agreement between you and us
                relating to the subject matter of these Terms, and supersede all prior understandings of the parties relating to the subject
                matter of these Terms, whether those prior understandings were electronic, oral or written, or whether established by
                custom, practice, policy or precedent, between you and us.
            </p>
            <h2>20. LANGUAGE OF THE TERMS</h2>
            <p>
                If we provide a translated version of these Terms, Feature Terms, Community Rules, Privacy Policy, or any other terms or
                policy, it is for informational purposes only. If the translated version means something different from the English version,
                then the English meaning will be the one that applies.
            </p>
            <h2>21. NO WAIVER</h2>
            <p>
                If we do not enforce our rights under these Terms, Feature Terms, or Community Rules, that does not waive our right to do so
                later. And, if we do expressly waive a provision of these Terms, Feature Terms, or Community Rules, that does not mean it is
                waived for all time in the future. If we do waive a default or breach by you, we will only do so in writing, and that will
                not mean that we will automatically waive any later default or breach by you.
            </p>
            <h2>22. NOTICES</h2>
            <p>
                If we have to give you notice of something according to the Terms, Feature Terms, or Community Rules, we may notify you by
                posting a message on http://kktplus.com or in the KKTPlus game(s) you play, sending you an e-mail, or using other ways of
                communicating with you based on the contact information you provide to us.
            </p>
            <p>
                If you have to give us notice of something according to the Terms, Feature Terms, or Community Rules, the notice must be in
                writing and sent to us through Customer Support.
            </p>
        </div>
    </component>
</template>
