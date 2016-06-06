var fs = require('fs');

module.exports.getDeviceInfo = function(req, res) {
    var email = req.params.useremail;

    console.log('email is', email);
    fs.readFile( __dirname + "/../" + "devices.json", 'utf8', function (err, data) {
        if(err) return res.status(400).send("Could not read devices");
        console.log('error',err,'data', data);
        data = JSON.parse( data );
        var user = data[email];
        if(user) return res.json(user);
        return res.status(400).send('User could not be found');
    });
};

