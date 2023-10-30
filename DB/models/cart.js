const mongoose = require('mongoose');

let CartDB;

try {
  // Check if the model already exists
  CartDB = mongoose.model('CartDB');
} catch (error) {
  // Define the model if it doesn't exist
  const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1
      },
      timestamp: {
        type: Date,
        default: Date.now(),
      },
  }, { collection: 'CartDB' });

  CartDB = mongoose.model('CartDB', CartSchema);
}

module.exports = CartDB;
