import sendRequest from "./send-request";

const BASE_URL = '/api/orders'

export function getCart(){
    return sendRequest(`${BASE_URL}/cart`)
}

export function addItemToCart(prodId){
    return sendRequest(`${BASE_URL}/cart/products/${prodId}`, 'POST')
}