// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let userRoute = express.Router() ;

let { postHome, getProfile, getHome } = require("../controller/user.controller");

//Router Code  : 

userRoute.get("/" , getHome) ;
userRoute.post("/" , postHome) ;
userRoute.get("/profile" , getProfile) ;


// Exports Code :

module.exports = userRoute ;
