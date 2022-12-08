const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Add schema below
const lineItemSchema = new Schema({
    // Set qty to 1 when new item pushed into lineItems
    qty: { type: Number, default: 1 },
    itemId: {type: Number, required: true},
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
  })


const orderSchema = new Schema({
    // An order belongs to a user
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // Embed an order's line items is logical
    lineItems: [lineItemSchema],
    // A user's unpaid order is their "cart"
    isPaid: { type: Boolean, default: false },
  }, {
    timestamps: true,
    toJSON: {virtuals: true}
  });

orderSchema.statics.getCart = function(userId){
    return this.findOneAndUpdate(
        { user: userId, isPaid: false},
        { user: userId},
        {upsert: true, new: true}
    )
}

orderSchema.methods.addItemToCart = async function(prodId, prodPrice){
    const cart = this
    const lineItem = cart.lineItems.find(lineItem => lineItem.itemId == prodId)
    if (lineItem){
        lineItem.qty += 1
    } else {
        let orderedProduct = {
            qty: 1,
            itemId: prodId,
        }
        cart.lineItems.push(orderedProduct)
    }
    return cart.save()
}
orderSchema.methods.setItemQty = function(prodId, newQty){
    const cart = this
    const lineItem = cart.lineItems.find(lineItem => lineItem.itemId == prodId)
    if(lineItem && newQty <= 0){
        lineItem.remove()
    } else if (lineItem){
        lineItem.qty = newQty
    }
    return cart.save()
}

module.exports = mongoose.model('Order', orderSchema)