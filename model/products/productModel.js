const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    productDescription:{
        type:String,
        require:true
    },
    productPrice:{
        type:String,
        require:true
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:'category'
    } 
});

const productModel = mongoose.model('product',productSchema);

module.exports = productModel;