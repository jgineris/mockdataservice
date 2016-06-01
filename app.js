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
        var user = data[email];
        if(user) res.json(user);
        else res.status(400).send('User could not be found');
    });
});

router.get('/hello', function(req, res) {
    res.json({ message: 'Hello world' });
});

app.use('/api', router);

app.listen(port);
console.log('App listening on port ' + port);