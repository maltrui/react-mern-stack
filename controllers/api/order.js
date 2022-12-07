const Order = require('../../models/order')

module.exports = {
    cart,
    addToCart
}
async function cart(req, res){
    const cart = await Order.getCart(req.user._id)
    res.json(cart)
} 

async function addToCart(req,res){
    console.log(req.params.id)
    const cart = await Order.getCart(req.user._id)
    await cart.addItemToCart(req.params.id)
    res.json(cart)
} 