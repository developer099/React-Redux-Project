'use strict';


var express = require('express'),
    controller = require('./src/chat.controller'),
    auth = require('../auth/src/auth.service'),
    router = express.Router();
    
// Add a new message
router.post('/', auth.isAuthenticated(), controller.addMessage);

// Get message list
router.get('/', auth.isAuthenticated(), controller.getMessages);

module.exports = router;
