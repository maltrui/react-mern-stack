const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    // An order belongs to a user
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // Embed an order's line items is logical
    lineItems: [lineItemSchema],
    // A user's unpaid order is their "cart"
    isPaid: { type: Boolean, default: false },
  }, {
    timestamps: true
  });
  
  orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
  })

  orderSchema.virtual('totalQty').get(function () {
    return this.lineItems.reduce((total, item) => total + item.qty, 0);
  })

  orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
  })