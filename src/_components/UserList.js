import React from 'react';
import PropTypes from 'prop-types';

export const UserList = ({ users }) => (
    <aside id="sidebar" className="sidebar">
        <ul> 
            {
                users.loading && (
                    <li>dfdsfsdfds</li>
                )
            }
            {   
                users.items && users.items.map(user=>                    
                    <li>
                        {user.email}
                    </li>
                )
            }
        </ul>
    </aside>
)

export default UserList