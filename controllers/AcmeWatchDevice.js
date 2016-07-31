var fs = require('fs');

module.exports.AcmeWatchDevice = function(req, res) {
    var email = req.params.useremail;
    fs.readFile( __dirname + "/../" + "AcmeWatchDevice.json", 'utf8', function (err, data) {
        if(err) return res.status(400).send("Could not find Acme device");
        data = JSON.parse( data );
        var devices = data[email];
        if(devices) return res.json({devices: devices} );
        return res.status(400).send('User could not be found');
    });
};
