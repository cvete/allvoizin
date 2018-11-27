"use strict"
var assert = require("assert");
var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
       
	    res.setHeader("Content-type", "application/json");
	    res.end(JSON.stringify(json));

	});

 app.listen(8888);
