import sendRequest from "./send-request";

const BASE_URL = '/api/orders'

export function getCart(){
    return sendRequest(`${BASE_URL}/cart`)
}

export function addItemToCart(prodId){
    return sendRequest(`${BASE_URL}/cart/products/${prodId}`, 'POST')
}

export function setItemQtyInCart(itemId, newQty){
    console.log('getting here')
    console.log(itemId)
    console.log(newQty)
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', {itemId, newQty})
}