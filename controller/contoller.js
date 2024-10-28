const defaultContoller = (req,res) => {
    console.log("hey");
    res.redirect('register')
};

module.exports = {defaultContoller}