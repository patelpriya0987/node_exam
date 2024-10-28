const express = require('express');
const route = express.Router();
const product = require('./productRoute.js')
const controller = require('../controller/contoller')
const authcontroller = require('../controller/authContoller')

route.use('/product',product)

route.get('/',controller.defaultContoller);
route.get('/register',authcontroller.register);
route.get('/login',authcontroller.login);
route.post('/postRegister',authcontroller.postRegisterContoller);
route.post('/postlogin',authcontroller.loginContoller);
module.exports = route;