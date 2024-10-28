const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category:{
        type:String,
        require:true
    }
});

const categoryModel = mongoose.model('category',categorySchema);

module.exports = categoryModel;