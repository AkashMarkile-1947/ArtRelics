const mongoose = require('mongoose');

let UserDB;

try {
  // Check if the model already exists
  UserDB = mongoose.model('UserDB');
} catch (error) {
  // Define the model if it doesn't exist
  const UserSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  }, { collection: 'UserDB' });

  UserDB = mongoose.model('UserDB', UserSchema);
}

module.exports = UserDB;
