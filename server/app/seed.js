'use strict';

var User = require('./user/src/user.model');
var Message = require('./chat/src/chat.model');

module.exports = function(conn) {    
    conn.db.dropDatabase();

    User.create(
        {            
            email: 'admin@admin.com',            
            password: 'adminadmin'            
        }, {            
            email: 'manager@manager.com',            
            password: 'managermanager'            
        }, {            
            email: 'user@user.com',            
            password: 'useruser'            
        }, function() {
            console.log('Populated users.');
        }
    );

    Message.create(
        {message: 'Hello-1'},
        {message: 'Hello-2'},
        {message: 'Hello-3'},
        {message: 'Hello-4'},
        {message: 'Hello-5'}
    )
};
