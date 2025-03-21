<template>
    <div class="braintree">
        <!-- Step one: add an empty container to your page -->
        <div id="dropin-container"></div>
        <button v-show="isShowSubmitBtn" id="submit-button" class="button button--small button--green">Purchase</button>
        <div id="paypal-button"></div>
        <button id="ideal-button" @click="startPayment">AliPay</button>
    </div>
</template>

<script setup lang="ts">
// Step two: create a dropin instance using that container (or a string
//   that functions as a query selector such as '#dropin-container')
import { onMounted, ref } from "vue";
import braintree, { BraintreeError, LocalPayment } from "braintree-web";
import dropin, { Dropin } from "braintree-web-drop-in";
import { getUrlParams } from "./utils";
import { usePay } from "./hook";
import { confirmPaymentOrder } from "./api";
import { OrderInfo } from "./types";
const { getOrderStatus } = usePay();
const { order_id, signature, currency, lang, client_token } = getUrlParams();
const isShowSubmitBtn = ref(false);
let dropinInstance: Dropin;
const init = async () => {
    if (!client_token) {
        console.error("client_token is required");
        return;
    }
    console.log("amount:", orderInfo.value?.curr_amount);
    console.log("currency:", orderInfo.value?.currency);
    const amount = orderInfo.value?.curr_amount;
    const currency = orderInfo.value?.currency;
    if (!amount || !currency) {
        console.error("amount or currency is required");
        return;
    }
    const submitButton = document.querySelector("#submit-button");
    try {
        dropinInstance = await dropin.create({
            authorization: client_token,
            container: "#dropin-container",
            dataCollector: true,
            googlePay: {
                googlePayVersion: 2,
                merchantId: "merchant-id",
                transactionInfo: {
                    totalPriceStatus: "FINAL",
                    totalPrice: String(amount),
                    currencyCode: currency,
                },
            },
            applePay: {
                displayName: "Riichi City Store",
                paymentRequest: {
                    // countryCode: "",
                    // currencyCode: currency,
                    // supportedNetworks: [],
                    // merchantCapabilities: [],
                    total: {
                        label: "Riichi City Store",
                        amount: String(amount),
                    },
                    // We recommend collecting billing address information, at minimum
                    // billing postal code, and passing that billing postal code with all
                    // Apple Pay transactions as a best practice.
                    // requiredBillingContactFields: ["postalAddress"],
                },
            },
        });
        // 选择支付方式回调
        dropinInstance.on("paymentOptionSelected", async (payload) => {
            console.log("paymentOptionSelected payload:", payload);
        });
        dropinInstance.on("noPaymentMethodRequestable", () => {
            console.log("noPaymentMethodRequestable");
        });
        dropinInstance.on("paymentMethodRequestable", async (payload) => {
            try {
                const { paymentMethodIsSelected } = payload;
                console.log("paymentMethodRequestable payload:", payload);
                if (paymentMethodIsSelected) {
                    const payload = await dropinInstance.requestPaymentMethod();
                    console.log("payload:", payload);
                    const result = await sendNonceToServer(payload);
                    console.log("result:", result);
                    // if (result !== 0) return;
                    getOrderStatus();
                }
            } catch (err) {
                console.error("paymentMethodRequestable error:", err);
            }
        });
        dropinInstance.on("changeActiveView", (payload) => {
            if (payload.newViewId === "card") {
                // 选择信用卡支付--展示确认按钮
                isShowSubmitBtn.value = true;
            } else {
                isShowSubmitBtn.value = false;
            }
        });

        console.log("dropinInstance:", dropinInstance);
        submitButton!.addEventListener("click", async () => {
            try {
                const payload = await dropinInstance.requestPaymentMethod();
                console.log("payload:", payload);
                const result = await sendNonceToServer(payload);
                console.log("result:", result);
                // if (result !== 0) return;
                await getOrderStatus();
            } catch (error) {
                console.error("dropinInstance.requestPaymentMethod error:", error);
            }
        });
    } catch (error) {
        console.error("braintree.dropin create error:", error);
    }
};
let localPaymentInstance: LocalPayment | null = null;
const initLocalPayment = async () => {
    if (!client_token) {
        console.error("client_token is required");
        return;
    }
    try {
        const clientInstance = await braintree.client.create({
            authorization: client_token,
        });
        console.log("clientInstance:", clientInstance);

        localPaymentInstance = await braintree.localPayment.create({
            client: clientInstance,
            // merchantAccountId: "merchant-id",
        });
        console.log("localPaymentInstance:", localPaymentInstance);
        // console.log("Got a nonce: ", localPaymentInstance.tokenizePayload.nonce);
    } catch (err) {
        console.error("initLocalPayment error:", err);
    }
};
const startPayment = async () => {
    const amount = orderInfo.value?.curr_amount;
    const currency = orderInfo.value?.currency;
    if (!amount || !currency) {
        console.error("amount or currency is required");
        return;
    }
    if (!localPaymentInstance) {
        console.error("localPaymentInstance is required");
        return;
    }
    try {
        const payload = await localPaymentInstance.startPayment({
            paymentType: "alipay" as any,
            // paymentType: "bancontact",
            amount: amount,
            // currencyCode: "EUR",
            currencyCode: currency,
            givenName: "test givenName",
            surname: "test surname",
            fallback: {
                url: "https://10.100.1.199",
                buttonText: "Return to Merchant",
            },
            onPaymentStart: (payload, start) => {
                console.log("startPayment onSuccess payload:", payload);
                start();
            },
        });
        console.log("startPayment payload:", payload);
        sendNonceToServer(payload);
    } catch (err: BraintreeError | any) {
        if (err.code === "LOCAL_PAYMENT_POPUP_CLOSED") {
            console.error("Customer closed Local Payment popup.");
        } else {
            console.error("startPayment error:", err);
        }
    }
};
const sendNonceToServer = async (payload: any) => {
    console.log("sendNonceToServer payload:", payload);
    let { nonce, type, deviceData } = payload;
    if (!nonce) {
        console.error("nonce is required");
        return;
    }
    if (!type) {
        console.error("type is required");
        return;
    }
    const res = await confirmPaymentOrder({
        orderId: order_id,
        signature,
        channel: type,
        nonce,
        deviceData,
    });
    console.log("res:", res);
    return res.data.transactionId;
};
const orderInfo = ref<OrderInfo>();
onMounted(async () => {
    orderInfo.value = await getOrderStatus();
    await init();
    await initLocalPayment();
});
</script>
<style>
body {
    margin: 0;
    padding: 0;
}
.braintree {
    box-sizing: border-box;
    height: 100vh;
    margin: 0 auto;
    padding-top: 30vh;
}
.button {
    cursor: pointer;
    font-weight: 500;
    left: 3px;
    line-height: inherit;
    position: relative;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
}

.button--small {
    padding: 10px 20px;
    font-size: 0.875rem;
}

.button--green {
    outline: none;
    background-color: #64d18a;
    border-color: #64d18a;
    color: white;
    transition: all 200ms ease;
}

.button--green:hover {
    background-color: #8bdda8;
    color: white;
}
@media screen and (max-width: 750px) {
    .braintree {
        width: 90vw;
    }
}

@media screen and (min-width: 751px) {
    .braintree {
        width: 750px;
    }
}
</style>
