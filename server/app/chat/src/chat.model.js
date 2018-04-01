'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    config = require('../../../config');
    
var ChatSchema = new Schema({
    message: {
        type: String,
        default: ''        
    },
    date: {
        type: Date,
        default: Date.now,
        required: [true, 'Date can not be blank.']        
    },
    // email: {
    //     type: String,
    //     trim: true,
    //     default: '',
    //     required: [true, 'Email can not be blank.'],
    //     match: [/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 'Email is not a valid address.']
    // },       
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Chat', ChatSchema);
