'use strict';

// Development environment
module.exports = {
    // MongoDB connection options
    mongo: {
        // uri: 'mongodb://YangJin:Yang234891@ds155577.mlab.com:55577/calories',
        uri: 'mongodb://localhost:27017/SlackTest',
        options: {
            useMongoClient: true
        }
    }       
};