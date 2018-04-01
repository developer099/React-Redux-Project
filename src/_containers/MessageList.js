import { connect } from 'react-redux';
import MessageListComponent from '../_components/MessageList';

export const MessageList = connect(state => ({messages: state.messages}), {})(MessageListComponent);