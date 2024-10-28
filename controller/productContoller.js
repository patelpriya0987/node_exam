const productModel = require('../model/products/productModel')

const categoryList = (req,res) => {
    console.log("categoryList");
    
}
const myProduct = (req,res) => {
    console.log("myProduct");
    
}
const postProductForm = async (req,res) => {
    console.log("postProductForm");

    const {productName,productDescription,productPrice,category} = req.body;

    const data = {
        productName,
        productDescription,
        productPrice,
        category
    }
    const datasave = await new productModel(data);

    console.log("datasave",datasave);

    await datasave.save();

    res.redirect('login');
    
}
const productForm = (req,res) => {
    console.log("productForm");
    res.render('poductForm');
    
}
const productItem = (req,res) => {
    console.log("productItem");
    
}
const productList = (req,res) => {
    console.log("productList");

    res.render('productList')
    
}
module.exports = {categoryList,myProduct,productForm,productItem,productList,postProductForm}