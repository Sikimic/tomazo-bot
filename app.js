var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function (req, res)  { 
	res.status(200).send('Hello World'); 
});

app.listen(port, function() {
	console.log('listening on port ' + port);
});

app.post('/ooo', function(req, res, next) {
	var username = req.body.user_name;
	var botPayoad = {
		text: 'Oooo, deste momci? Radimo a?',
		challenge: req.body.challenge;
	};

	if (username !== 'slackbot') {
		return res.status(200).json(botPayoad);
	} else {
		return res.status(200).end();
	}

});