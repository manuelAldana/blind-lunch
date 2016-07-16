var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var config;

app.put("/config", function(req, res) {
	config = req.body;
	res.send(req.body);
});

app.get("/config", function(req,res) {
	if(config == null) {
		res.send(404);
	} else {
		res.send(config);
	}
});

app.listen(8000, function() {
	console.log("Now running with express");
});

