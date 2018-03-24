'use strict';

var lodash = require('lodash'),
    path = require('path');

var defaultConfig = {
    env: process.env.NODE_ENV || 'development',

    // Server port
    port: process.env.PORT || 8000,

    // Root path of server
    root: path.normalize(__dirname + '/../../..'),

    // Secret for session, you will want to change this and make it an environment variable    
    jwtSecret: 'YJ@!s5cretK5Y',
    jwtSession: { session: false },

    // user roles
    userRoles: ['user', 'manager', 'admin'],

    // MongoDB connection options
    mongo: {
        options: {
            db: {
                safe: true
            }
        }
    },

    // Seed db
    seed: process.env.SEED || true
};

// Export the config object based on the NODE_ENV
module.exports = lodash.merge(
    defaultConfig,
    require('./' + defaultConfig.env + '.js') || {}
);
