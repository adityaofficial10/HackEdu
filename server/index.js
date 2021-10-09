require('dotenv').config({
    path:"config/.env",
});
//packages required
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const {connectMongo} = require("./config/database");
const {mongoURI} = require("./config/database");
const UserSchema = require('./api/models/Users');

const app= express();

app.use(bodyParser.urlencoded({
    extended: true
}));

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};


console.log("=> Connecting to MongoDB Atlas ...");

//MongoDB Connecion setup
connectMongo(mongoURI).then((connection)=>{
    //making models
    global.userModel = connection.model('User', UserSchema);

    console.log("=> MongoDB Connected !!");

    connection.on('error', function(err){
        if(err)
        console.log(err);
    });

    app.listen(4000,function(){
        console.log("Local Man listening on Port 4000");
    });

});
