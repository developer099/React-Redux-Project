'use strict';
var config = require('../config');

module.exports = function(app, io) {

    app.use('/api/auth', require('./auth'));
    app.use('/api/user', require('./user'));
    app.use('/api/chat', require('./chat'));

    app.use(function(err, req, res, next) {
        if(!err) return next();
        res.status(500).json({
            error: err.stack
        });
    });

    app.use(function(req, res) {
        res.status(404).json({
            url: req.originalUrl,
            error: 'Not Found'
        });
    });
};
