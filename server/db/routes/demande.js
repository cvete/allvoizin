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

// Creation d'un Bien ou Service

function createSouB(db, param, callback){
	db.collection("ServiceOuBien").insertOne(param["filterObject"], function(err, doc) {
		if(err) {
			console.log(param);	
			callback('echec', []);
		}
		else {
			console.log(param);
			callback('succes', doc);
		}
	});
}

// Supression d'un Service ou Bien
function deleteDemande(db, param, callback){
	db.collection("ServiceOuBien").deleteOne(param["filterObject"]).toArray(function(err, doc){
		if(err)
			callback(err, []);	
		else if (doc !== undefined)
			callback(param["message"], doc);
		else
			callback(param["message"], []);
	});
}



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

  // creation de Service Ou Bien
	router.post("/demande/create", function (req, res) {
		
		if(!req.body){
		  return res.sendStatus(400);
		}

		console.log(req.body);
		let newDemande = {
		  "titre" : req.body.titre,
		  "descriptif" : req.body.descriptif,
		  "prix" : req.body.prix,
		  "SouB" : req.body.SouB,
		  "email" : req.body.email
	};
	console.log(newDemande);
	createSouB(db, {"message" : "/demande/create", "filterObject" : newDemande}, function(step,results){
		res.setHeader("Content-type","application/json; charset = UTF-8");
		let json = JSON.stringify(results);
		console.log(json);
		//res.send(step);
		res.end(json);
	});
    });
  
	router.get("/demande/delete/:id",function(req,res){

		console.log(req.params.id);
		deleteDemande(db,{"message" : "/demande/delete", "filterObject" : ObjectId(req.params.id)},function(step,results){
			res.setHeader("Content-type","application/json; charset = UTF-8");
			let json = JSON.stringify(results);
			res.end(json);
		});
	});


});



module.exports = router;