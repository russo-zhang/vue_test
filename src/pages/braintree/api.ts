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
    return axios.post(`/store/getPaymentOrder`, data);
};

export const confirmPaymentOrder = (data: CreateOrderReq) => {
    return axios.post(`/store/confirmPaymentOrder`, data);
};

export const capturePaymentOrder = (data: capturePaymentOrderReq) => {
    return axios.post(`/store/capturePaymentOrder`, data);
};
