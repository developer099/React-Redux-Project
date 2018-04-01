'use strict';

var express = require('express'),
    controller = require('./src/user.controller'),
    auth = require('../auth/src/auth.service'),
    router = express.Router();

// Register a new user
router.post('/', controller.create);

// Get the user's profile
router.get('/profile', auth.isAuthenticated(), controller.profile);

// Update the user's profile
router.put('/profile', auth.isAuthenticated(), controller.updateProfile);

// Update the user's password
router.put('/password', auth.isAuthenticated(), controller.updatePassword);

/**
 * Manager, Admin routes
**/
// Get the list of users
router.get('/', controller.index);

// Create a new user
router.post('/new', auth.hasRole('manager'), controller.createUser);

// Get the profile of specific user
router.get('/:id', auth.hasRole('manager'), controller.get);

// Update the profile of specific user
router.put('/:id', auth.hasRole('manager'), controller.update);

// Update the password of specific user
router.put('/password/:id', auth.hasRole('manager'), controller.updateUserPassword);

// Delete a user
router.delete('/:id', auth.hasRole('manager'), controller.delete);

module.exports = router;
