import sendRequest from "./send-request";

const BASE_URL = '/api/orders'

export function getCart(){
    console.log('did we start')
    return sendRequest(`${BASE_URL}/cart`)
}

export function addItemToCart(prodId){
    console.log("are we here")
    console.log(prodId)
    return sendRequest(`${BASE_URL}/cart/products/${prodId}`, 'POST')
}