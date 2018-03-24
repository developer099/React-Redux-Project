'use strict';

var express = require('express'),
    cors = require('cors'),
    http = require('http'),
    morgan = require('morgan'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    path = require('path'),
    passport = require('passport'),
    config = require('../config');

module.exports = function() {
    // Initialize express app
    var app = express();
  
    // Set views and view engine
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', config.root + '/server/views');
    app.use(cors());
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(morgan('dev'));

    require('./routes')(app);
  
    return app;
};