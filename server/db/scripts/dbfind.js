"use strict"
var assert = require("assert");
var express = require("express");
////var app = express();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";


 var query = { prenom: "Loic" };

var productResearch = function(db) {

  var cursor = db.collection("Membres").find(query);
      cursor.each(function(err, doc) {
       assert.equal(null, err);
       if (doc != null) {

        for (let p in doc) 
 
          console.log(p+ " :" + doc[p]);
         //console.log(p);
           
       }

       
          // console.log("no query");
           

        });



};



MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    let db = client.db("dbsite");
    assert.equal(null, err);
   
    

    productResearch(db);




    //console.log("insertion  is done");

    client.close();


});