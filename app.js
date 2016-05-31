var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();


router.get('/deviceinfo/:useremail', function(req, res) {
    var email = req.params.useremail;
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        console.log( 'data[email]', data[email]);
        res.json(data[email]);
    });
});

router.get('/hello', function(req, res) {
    res.json({ message: 'Hello world' });
});

app.use('/api', router);

app.listen(port);
console.log('App listening on port ' + port);