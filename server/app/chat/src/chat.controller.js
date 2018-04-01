'use strict';
import moment from 'moment';

var Chat = require('./chat.model'),
    errorHandler = require('../../error/src/error.controller'),
    lodash = require('lodash');

/**
 * Create a new Message
**/
exports.addMessage = function(req, res) {    
    var newMessage = new Chat(lodash.omit(req.body, '_id'));    
    // if (!newMessage.userId) return res.sendStatus(422);

    Chat.create(newMessage, function(err, message) {
        if(err) return res.status(422).json({
            message: errorHandler.getErrorMessage(err)
        });
        req.io.sockets.emit('newMessage', message);
        return res.status(201).json(message);
    });    
};

/**
 * Get the list of messages
**/
exports.getMessages = function(req, res) {
    // date: {$gt: ISODate(momen())}
    var params = {};
    Chat.find(params, '-updatedAt' , function(err, messages) {
        if(err) return res.status(500).json({
            message: errorHandler.getErrorMessage(err)
        });

        return res.status(200).json(messages);
    });
};
