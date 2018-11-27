var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./routes/index');
var inscription = require('./routes/inscription');

var app = express();

// Views Engine
var port = '3001'

app.set('views', path.join(__dirname, 'views'));
app.set ('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static folder

app.use(express.static(path.join(__dirname, 'client')));

app.use(cors());
// Body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));

app.use('/', index);
app.use('/', inscription);

app.listen( port, function()
	{

		console.log('Server is up ' +port );
	}


	);