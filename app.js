var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var deviceController = require('./controllers/device');
var authController = require('./controllers/auth');
var passport = require('passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

app.use(passport.initialize());

router.get('/login',
    authController.isAuthenticated,
    function(req, res) {
        res.json(req.user);
    });

router.get('/deviceinfo/:useremail', deviceController.getDeviceInfo);

router.get('/hello', function(req, res) {
    res.json({ message: 'Hello world' });
});

router.get('/', function(req, res) {
   res.json({message: 'Hi there!'});
});

app.use('/api', router);

app.listen(port);
console.log('App listening on port ' + port);