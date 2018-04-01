import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';

import { userActions } from '../_actions';
import { chatActions } from '../_actions';
import { chatConstants } from '../_constants';
import { UserList } from '../_containers/UserList';
import { MessageList } from '../_containers/MessageList';
import { AddMessage } from '../_containers/AddMessage';

const API = 'http://localhost:8001/';
const socket = openSocket(API);

class HomePage extends React.Component {

    constructor(props) {
        super(props);      
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        this.props.dispatch(chatActions.getMessages());
        socket.on('connect', () => {
            // socket.emit('group', 'general');
        });

        socket.on('newMessage', message => {
            this.props.dispatch({type: chatConstants.RECEIVED_MESSAGE, message: message})
        });
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    sendMessage(e) {        
    }

    render() {
        const { user, users, messages } = this.props;
        return (            
            <div id="container">                
                <UserList users="{users}"/>
                <section id="main">
                    <MessageList messages="{messages}"/>
                    <AddMessage/>
                </section>
            </div>           
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication, messages } = state;
    const { user } = authentication;
    console.log(messages);
    return {
        user,
        users,
        messages
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };