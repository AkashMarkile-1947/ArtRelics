import mongoose from 'mongoose';

let productSchema;

try {
    productSchema =  mongoose.model('productSchema');
} catch (error) {
 productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productMaterial: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productPicture: {
    type: String, // Store the file path or URL here
    required: true,
  },
}, {collection: "product"});

productSchema = mongoose.model('productSchema', productSchema);

}


module.exports =  productSchema;
