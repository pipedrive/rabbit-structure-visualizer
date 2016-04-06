var express = require('express'),
	app = express();

app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
	res.render('index.html');
});

app.post('/visual.svg', function(req, res) {
	// TODO
});

app.listen(55672);