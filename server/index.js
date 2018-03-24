'use strict';

/**
 * Module dependencies.
 */
var config = require('./config'),
    mongoose = require('mongoose'),
    app = require('./app/app');
    
var conn = mongoose.connect(config.mongo.uri, { useMongoClient: true }, function(err) {
    if(err) {
        console.error('Could not connect to MongoDB!');
        console.log(err);
    } else {        
        if(config.seed) {
            require('./app/seed')(conn);            
        }        
    }
});

// Init the express application
var app = app();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('SlackTest Server started on port ' + config.port);
