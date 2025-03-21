import Axios from "axios";
import { CreateOrderReq, GetOrderReq, capturePaymentOrderReq } from "./types";
const axios = Axios.create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: process.env.VUE_APP_BASE_URL,
});
//获取订单信息
export const getOrderInfo = (data: GetOrderReq) => {
    // return axios.post(`/store/getPaymentOrder`, data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    analysis_data:
                        "cKsMT+ocHzL1X/kmsrUmGvW78okNyMeppGd6u+5bcvi4bE7zIBpNOhO4/Y8i9RDm2uhHnQXmjFzqoHPY1FnFzfVzV/GjaqPiSWlOhX7WSiGG/5DN+aSefEsbP/OkeVlc2r/RJcmQnVyVeKfmD8QZdS4rGWwZ4ABgS0occHL01pr/A5iGxad8yA71QMw97uI1WOGAEavoTsUK18XPqW6dRK/WayBvW/hntfrZS+snYfmqcicR+5t1uzWfnrOjkB4TVfflzQH1wVw2WqgFM1T8FRoSMdIqKt0LIQv1sS6QHFUsKo/ONPYWrtu9SpUd5SViV2MOad52GRlrbqTEPqlJc2v8JzkKiW65B9Yl9HU6Ki1jKTKOdtB2XP+7WQHcogj9p2mo5uyZIsgjG/SMgg+1M7sVHHWvC7OH4VqQV/lNlHCcwsrcwvo9ynE2YtwXaIemg10WfKn8eEUzLmUCVlVRhwLCgJgweTq4vVBIS99Cb4I=",
                    check_data: "2660c24c7a3bfc6643670e8eb552d443",
                    code: 0,
                    data: {
                        amount: 0,
                        amount_currency: "USD",
                        created_time: "2025-03-20 14:36:06",
                        curr_amount: 4.99,
                        currency: "USD",
                        item_amount: 4.99,
                        item_id: 10001,
                        item_name: "一番券",
                        item_num: 400,
                        order_id: "2025032014360663u2yd",
                        purchase_time: "0001-01-01 00:00:00",
                        site_type: 10,
                        status: 1,
                        tax_amount: 0,
                        tax_currency: "",
                        transaction_id: "",
                        uid: 611045733,
                    },
                    message: "ok",
                },
            });
        }, 1000);
    });
};

export const confirmPaymentOrder = (data: CreateOrderReq) => {
    return axios.post(`/store/confirmPaymentOrder`, data);
};

export const capturePaymentOrder = (data: capturePaymentOrderReq) => {
    return axios.post(`/store/capturePaymentOrder`, data);
};
