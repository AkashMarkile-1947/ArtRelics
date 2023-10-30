const mongoose = require('mongoose');

// Define the OrderDB model
const orderSchema = new mongoose.Schema({
  addressId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  product: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
}, { collection: 'OrderDB' });

// Create the OrderDB model or get it if it already exists
const OrderDB = mongoose.models.OrderDB || mongoose.model('OrderDB', orderSchema);

module.exports = OrderDB;