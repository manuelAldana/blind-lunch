var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.put("/config", function(req, res) {
	res.send(req.body);
});

app.listen(8000, function() {
	console.log("Now running with express");
});

