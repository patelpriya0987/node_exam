const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://priyupatel0987:r2KP0EuXhpimlBeJ@exam.5qbmd.mongodb.net/')
.then(() => console.log('DB Connected!'))
.catch((err) =>{
    console.log("err",err);
  })