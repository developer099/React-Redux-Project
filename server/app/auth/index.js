'use strict';

var express = require('express'),
    config = require('../../config'),
    User = require('../user/src/user.model'),
    controller = require('./src/auth.controller'),
    router = express.Router();

// Passport Configuration
require('./src/passport').setup(User, config);

router.post('/', controller.authenticate);

module.exports = router;
