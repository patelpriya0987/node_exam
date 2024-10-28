const express = require('express');
const route = express.Router();
const productController = require('../controller/productContoller.js')

route.get('/categoryList',productController.categoryList);
route.get('/categoryList',productController.categoryList);
route.get('/productForm',productController.productForm);
route.post('/postProductForm',productController.postProductForm);
route.get('/productItem',productController.productItem);
route.get('/',productController.productList);
route.get('/productList',productController.productList);
module.exports = route;