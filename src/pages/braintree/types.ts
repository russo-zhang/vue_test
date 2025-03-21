export interface GetOrderReq {
    order_id: string;
    signature: string;
}
export interface CreateOrderReq {
    orderId: string;
    signature: string;
    channel: string;
    nonce: string;
    deviceData: string;
}
export interface capturePaymentOrderReq {
    orderId: string;
    signature: string;
}
export interface OrderInfo {
    amount: number;
    amount_currency: string;
    created_time: string;
    curr_amount: number;
    currency: string;
    item_amount: number;
    item_id: number;
    item_name: string;
    item_num: number;
    order_id: string;
    purchase_time: string;
    site_type: number;
    status: number;
    tax_amount: number;
    tax_currency: string;
    transaction_id: string;
    uid: number;
}