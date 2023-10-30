const mongoose = require('mongoose');

let AddressDB;

try {
  // Check if the model already exists
  AddressDB = mongoose.model('AddressDB');
} catch (error) {
  // Define the model if it doesn't exist
  const addressSchema = new mongoose.Schema({
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  }, { collection: 'AddressDB' });

  AddressDB = mongoose.model('AddressDB', addressSchema);
}

module.exports = AddressDB;
