import { authHeader } from '../_helpers';
import 'whatwg-fetch';

export const chatService = {
    addMessage,
    getMessages
};

function addMessage(message) {
    const requestOptions = {
        method: 'POST',        
        headers: authHeader(),
        body: JSON.stringify({ message: message })
    };    
    return fetch('http://localhost:8000/api/chat', requestOptions).then(handleResponse);
}

function getMessages() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch('http://localhost:8000/api/chat', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }
    return response.json();
}