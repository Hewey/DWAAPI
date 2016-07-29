var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/v1', function(req, res){
	res.json({hello : "world"});
});

app.use('/api', router);

var server = app.listen(port, function() {
	console.log('Stuff happens on port ' + port);
});

module.exports = server;