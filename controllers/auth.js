var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var fs = require('fs');

passport.use(new BasicStrategy(
    function(username, password, done) {

        fs.readFile( __dirname + "/../" + "users.json", 'utf8', function (err, data) {
            if(err) return done(err);
            data = JSON.parse( data );
            var pwd = data[username];
            if(!pwd) return done(null, { message: 'User does not exist'});
            if(pwd != password) return done(null, {message: 'Wrong password'});
            return done(null, {user: data});
        });

    }
));


module.exports.isAuthenticated = passport.authenticate('basic', { session: false });

