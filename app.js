// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let app = express() ;

let http = require("http") ;
let path = require("path") ;
let morgan = require("morgan") ;
let cors = require("cors") ;

let ejs = require("ejs") ;
let userRoute = require("./router/user.router");

let programmingLanguages = require("./controller/user.controller") ;

//Creating Server : 

let myServer = http.createServer(app) ;

// Connect With Server : 

app.use(express.urlencoded({extended:true})) ;
app.use(express.json()) ;
app.use(express.static(path.join(__dirname , "public" , "CSS"))) ;

app.use(morgan("dev")) ;
app.use(cors()) ;

app.set("view engine" , "ejs") ;

app.use(userRoute) ;

// Request-Response-Cycle : 



// Handle The Route Error 

app.use(function(req,res,next){

    res.status(404).json({

        status : 404 ,
        message : "Page not found !!!" 

    });

});

// Handle The Server Error 

app.use(function(err,req,res,next){

    res.status(500).json({

        status : 500 ,
        message : "Find the server error !!!" ,
        error : err.message 

    });

});

// Exports Code :

module.exports = myServer ;
