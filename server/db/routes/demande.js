"use strict"
var express = require('express');
var router = express.Router();
var assert = require("assert");
//var mongojs = require('mongojs');
router.use(express.json());
router.use(express.urlencoded({extended:true}));
var ObjectId = require('mongodb').ObjectID;


//var db = mongojs('mongodb://localhost:27017/dbsite', ['Membres'] );

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    let db = client.db("dbsite");
    assert.equal(null, err);




router.get('/demande/bien', function(req , res, next)

   {

 // Get All users

        db.collection("Bien").find().toArray((err, documents)=> {
	    let json = [];
            for (let doc of documents) {
                console.log(doc);
		json.push(doc);
            }
	    res.setHeader("Content-type", "application/json");
	    res.end(JSON.stringify(json));
	});
	});
	
	router.get('/demande/soub/:id', function(req , res, next)

	{
 
  // Get One Service

       let newid = req.params.id;
 
		 db.collection("ServiceOuBien").find({"_id": ObjectId(newid)}).toArray((err, documents)=> {
		 let json = [];
			 for (let doc of documents) {
				 console.log(doc);
		 json.push(doc);
			 }
		 res.setHeader("Content-type", "application/json");
		 res.end(JSON.stringify(json));
	 });
	 });
	
router.get('/demande/listedemande', function(req , res, next)

   {

 // Get All user's demandes 
 	db.collection('ServiceOuBien').aggregate([
    { $lookup:
       {
         from: 'Membres',
         localField: 'email',
         foreignField: 'email',
         as: 'listedemandes'
       }
     }
    ]).toArray((err, documents)=> {
	    let json = [];
            for (let doc of documents) {
                console.log(doc);
		json.push(doc);
            }
	    res.setHeader("Content-type", "application/json");
	    res.end(JSON.stringify(json));
	});
	});


	router.get('/demande/listedemande/:id', function(req , res, next)

   {
	   let newid = req.params.id;
	   console.log(newid);

 // Get All user's demandes 
 	db.collection('ServiceOuBien').aggregate([
    
	  { $lookup:
			{
			  from: 'Membres',
			  localField: 'email',
			  foreignField: 'email',
			  as: 'listedemandedetail'
			}
		
	 },
	 
	  { 
		$match: {_id: ObjectId(newid)} 
	
	  }


    ]).toArray((err, documents)=> {
	    let json = [];
            for (let doc of documents) {
                console.log(doc);
		json.push(doc);
            }
	    res.setHeader("Content-type", "application/json");
	    res.end(JSON.stringify(json));
	});
	});
	
	router.get('/demande/soub', function(req , res, next)

   {

 // Get All demandes (service et bien)

        db.collection("ServiceOuBien").find().toArray((err, documents)=> {
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

router.post('/bien', (req , res, next)=>{

	//var inscrire = req.body;

	console.log("route sur post : /Bien");
	console.log(req.body);
	for (let prop in req.body) {
            console.log(prop+" : "+req.body[prop]);
	}
	res.setHeader("Content-type", "text/raw");	
	try {
       
    db.collection("Bien").insertOne(req.body);
	res.end(" \n Insertion réussie  \n");	    
	}
	catch(e) {
	    res.end("Error "+e);
	}
    

  });





});



module.exports = router;