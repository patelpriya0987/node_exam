const userModel = require('../model/users/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const register = (req,res) => {
    res.render('register');
}
const login = (req,res)=> {
    res.render('login')
}
const postRegisterContoller = async(req,res) => {
    try{
        console.log("req.body",req.body);
        const {name,email,password,conf_password,role} = req.body;
        if(password == conf_password){
            bcrypt.hash(password, saltRounds, async(err, hash) => {
                const data = {
                    name,
                    email,
                    password : hash,
                    role
                }
                const datasave = await new userModel(data);
    
                console.log("datasave",datasave);
    
                await datasave.save();
    
                res.redirect('login');
                
            });
        }else{
            console.log("password & confirm password not matched");
            res.redirect('register');
        }
    }catch(err){
        console.log("err",err);
        
    }


}

const loginContoller = async(req,res)=> {

    console.log("login contoller");

    const {username,password} = req.body;

    const user = await userModel.findOne({email : username});
    console.log("user data",user);
    

    if(user){
        bcrypt.compare(password, user.password, (err, result) => {
            if(result){
                console.log("result",result);
                console.log("log in succesfully");
                res.cookie('user', user);
                res.redirect('/v1/product')                
            }
        });
    }else{
        console.log("user not found");
        res.redirect('register')
    }

    
}
module.exports = {register,loginContoller,postRegisterContoller,login}