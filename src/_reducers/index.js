import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { messages } from './messages.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  messages
});

export default rootReducer;