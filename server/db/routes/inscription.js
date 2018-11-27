"use strict"
var express = require('express');
var router = express.Router();
var assert = require("assert");
//var mongojs = require('mongojs');
router.use(express.json());
router.use(express.urlencoded({extended:true}));

//var db = mongojs('mongodb://localhost:27017/dbsite', ['Membres'] );

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    let db = client.db("dbsite");
    assert.equal(null, err);




router.get('/inscription', function(req , res, next)

   {

 // Get All users

        db.collection("Membres").find().toArray((err, documents)=> {
	    let json = [];
            for (let doc of documents) {
                console.log(doc);
		json.push(doc);
            }
	    res.setHeader("Content-type", "application/json");
	    res.end(JSON.stringify(json));
	});
    });


//POST method

router.post('/membre', (req , res, next)=>{

	//var inscrire = req.body;

	console.log("route sur post : /membre");
	console.log(req.body);
	for (let prop in req.body) {
            console.log(prop+" : "+req.body[prop]);
	}
	res.setHeader("Content-type", "text/raw");	
	try {
       
    db.collection("Membres").insertOne(req.body);
	res.end(" \n Insertion réussie  \n");	    
	}
	catch(e) {
	    res.end("Error "+e);
	}
    

  });





});



module.exports = router;