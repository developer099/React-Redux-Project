import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

export const MessageList = ({ messages }) => (
    <section id="messages-list">
        <ul>            
            {
                messages && messages.map(message=>
                    <Message                        
                        {...message}
                    />
                )                
            }
        </ul>
    </section>
)

export default MessageList