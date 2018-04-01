import { chatConstants } from '../_constants';

export function messages(state = [], action) {
  switch (action.type) {
    case chatConstants.RECEIVED_MESSAGE:    
      return state.concat([
        action.message
      ]);
    case chatConstants.GET_MESSAGES_SUCCESS:      
      return action.messages.map(message=>message);

    default:
      return state
  }
}