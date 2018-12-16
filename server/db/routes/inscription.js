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


router.all("/*", function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	console.log("Request received...");
	next();
  });





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
	
	router.get('/login', function(req , res, next)

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
	
	router.get('/membre/:email', function(req , res, next)

   {
	let newemail = req.params.email;
 // Get USER par son email

        db.collection("Membres").find({email: newemail}).toArray((err, documents)=> {
	    let json = [];
            for (let doc of documents) {
                console.log(doc);
		json.push(doc);
            }
	    res.setHeader("Content-type", "application/json");
	    res.end(JSON.stringify(json));
	});
	});
	

//Connexion
router.get("/user/login/:mail/:password",function(req,res){

	let user = {'email' : req.params.mail, 'password' : req.params.password};

	getUserByParams(db,{"message" : "/users", "filterObject" : user}, function(step, results){
		res.setHeader("Content-type","application/json; charset = UTF-8");
		let json = JSON.stringify(results);
		console.log(json);
		res.end(json);
	});
});



// inscriptions user 
router.post("/user/create", function(req, res) {		
	if(!req.body){
		return res.sendStatus(400);
	  }

	  let newUser = {
		"email" : req.body.email,
		"password" : req.body.password,
		"nom" : req.body.nom,
		"prenom" : req.body.prenom,
		"role" : req.body.role,
		"ville" : req.body.ville,
		"adresse" : req.body.adresse,
		"tel" : req.body.tel
  };

 // console.log(newUser);

  createUser(db, {"message" : "/Membres", "filterObject" : newUser}, function(step, results){
		res.setHeader("Content-type","application/json; charset = UTF-8");
		let json = JSON.stringify(results);
	//	console.log(step);
	 console.log(json);
		//res.send(step);
		res.end(json);
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
	//res.setHeader("Content-type", "text/raw");
	//res.setHeader({'Content-Type': 'application/json'});
	res.setHeader("Content-type","application/json");
	try {
       
    db.collection("Membres").insertOne(req.body);
	
	res.end(" \n Insertion réussie  \n");

	}
	catch(e) {
		
	    res.end("Error "+e);
	}
    

  });





});



function createUser(db, param, callback){
	db.collection("Membres").insertOne(param["filterObject"] ,function(err, doc) {
		if(err){ 
			callback('echec', []);
			console.log(doc);
		}
		else {
			callback('succes', doc);
			console.log(doc);
		}
	});
}

function getUserByParams(db,param,callback){
	db.collection("Membres").find(param["filterObject"]).toArray(function(err,doc){
		if (err)
			callback(err,[]);
		else if (doc !== undefined) 
			callback(param["message"],doc);
		else
			callback(param["message"],[]);
	});
}



module.exports = router;