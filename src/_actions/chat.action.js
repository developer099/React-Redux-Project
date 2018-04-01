import { chatConstants } from '../_constants';
import { userService } from '../_services';
import { chatService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const chatActions = {
    getMessages,
    addMessage    
};

function getMessages(){
    return dispatch => {
        dispatch(request());

        chatService.getMessages()
            .then(
                messages => dispatch(success(messages)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: chatConstants.GET_MESSAGES_REQUEST } }
    function success(messages) { return { type: chatConstants.GET_MESSAGES_SUCCESS, messages } }
    function failure(error) { return { type: chatConstants.GET_MESSAGES_FAILURE, error } }
}

function addMessage(message) {
    return dispatch => {
        dispatch(request());

        chatService.addMessage(message)
            .then(
                target => { 
                    dispatch(success(target));                    
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: chatConstants.ADD_MESSAGE_REQUEST } }
    function success() { return { type: chatConstants.ADD_MESSAGE_SUCCESS } }
    function failure(error) { return { type: chatConstants.ADD_MESSAGE_FAILURE, error } }
}
