// models/order.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Add schema below
const lineItemSchema = new Schema({
  // Set qty to 1 when new item pushed into lineItems
  qty: { type: Number, default: 1 },
  itemId: {type: Number, required: true}
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

lineItemSchema.virtual('extPrice').get(function () {
    // 'this' is bound to the lineItem subdocument
    return this.qty * this.itemId.price;
})

