import sendRequest from "./send-request";

const BASE_URL = '/api/orders'

export function getCart(){
    return sendRequest(`${BASE_URL}/cart`)
}

export function addItemToCart(prodId){
    return sendRequest(`${BASE_URL}/cart/products/${prodId}`, 'POST')
}

export function setItemQtyInCart(itemId, newQty){
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', {itemId, newQty})
}

export function checkout(){
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST')
}

export function getOrderHistory(){
    return sendRequest(`${BASE_URL}/history`)
}