var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.get('/', function (req, res)  { 
	res.status(200).send('Ooooo deste momci? Radimo a?'); 
});

app.listen(port, function() {
	console.log('listening on port ' + port);
});

app.post('/ooo', function(req, res) {
	var username = req.body.user_name;
	var botPayload = {
		challenge: "req.body.challenge"	
	};
	console.log(req);
	return req.send(res.body);
});