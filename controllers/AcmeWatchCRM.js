var fs = require('fs');

module.exports.AcmeWatchCRM = function(req, res) {
    var email = req.params.useremail;
    fs.readFile( __dirname + "/../" + "AcmeWatchCRM.json", 'utf8', function (err, data) {
        if(err) return res.status(400).send("Could not find Acme watch");
        data = JSON.parse( data );
        var devices = data[email];
        if(devices) return res.json({devices: devices} );
        return res.status(400).send('User could not be found');
    });
};
