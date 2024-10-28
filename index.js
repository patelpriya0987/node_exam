// E-commerce Platform Project Outline with JWT, Cookie, Role-Based Access, Multiuser Support, Populate, Navbar, and MVC Pattern

const express = require('express');
const app = express();
const route = require('./routes/route');
const db = require('./config/db')
const bodyParser = require('body-parser')
const express_session = require('express-session');
const cookieParser = require('cookie-parser')
const port = 3002;
const path = require('path');
const Path= path.join(__dirname , "/views");

const passport = require('./config/passport');

app.set("view engine" , "ejs");
app.set("views",Path)


app.use(cookieParser());
app.use(express.static(Path))

app.use(express_session({ secret: 'mySecret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/v1',express.static(path.join(__dirname)))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))



app.use('/v1',route);

app.listen(port,(err)=> {
    if(!err){
        console.log(`server is running on http://localhost:${port}/v1`);
    }
})