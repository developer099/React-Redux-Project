'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    config = require('../../../config');
    
var UserSchema = new Schema({    
    email: {
        type: String,
        trim: true,
        default: '',
        required: [true, 'Email can not be blank.'],
        match: [/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 'Email is not a valid address.']
    },
    password: {
        type: String,
        default: '',
        required: [true, 'Password can not be blank.'],
        minlength: [6, 'Password should be longer than 5.']
    },    
    salt: String,
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * Pre-save hook
**/
UserSchema.pre('save', function(next) {
    if(this.password && this.password.length > 6) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

/**
 * Methods
**/
UserSchema.methods.hashPassword = function(password) {
    if(this.salt && password) {
        return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
    } else {
        return password;
    }
};

UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

module.exports = mongoose.model('User', UserSchema);
