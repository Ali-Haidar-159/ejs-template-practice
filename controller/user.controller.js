// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 



//Controller Code :

let programmingLanguages = [] ;

let getHome = function(req,res){

    res.status(200).render("index" , {programmingLanguages : programmingLanguages}) ;

}

let postHome = function(req,res){

    let language = req.body.language ;

    programmingLanguages.push(language) ;

    // console.log(programmingLanguages) ;

    res.status(201).redirect("/") ;

}

let getProfile = function(req,res){

    res.status(200).render("profile" , {name : "Ali Haidar" , dept:"CSE"}) ;

}

// Exports Code :

module.exports = {

    getHome ,
    postHome ,
    getProfile ,
}
