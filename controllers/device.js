var fs = require('fs');

module.exports.getDeviceInfo = function(req, res) {
    var email = req.params.useremail;

    console.log('email is', email);
    fs.readFile( __dirname + "/../" + "devices.json", 'utf8', function (err, data) {
        if(err) return res.status(400).send("Could not read devices");
        data = JSON.parse( data );
        var devices = data[email];
        if(devices) return res.json({devices: devices} );
        return res.status(400).send('User could not be found');
    });
};

