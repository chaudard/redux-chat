import { CREATE_MESSAGE } from '../actions/index.js';

export default function(state = null, action) {
  switch (action.type) {
    case CREATE_MESSAGE: {
        let newMessages = state.messages.slice(0);
        newMessages.push(action.payload);
        return newMessages;
    }
    default: {
      return state;
    }
  }
}