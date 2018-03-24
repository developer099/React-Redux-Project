'use strict';

var User = require('./user/src/user.model');   

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
};
