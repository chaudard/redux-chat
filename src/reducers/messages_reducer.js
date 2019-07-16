import { FETCH_MESSAGES } from '../actions/index.js';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    default: {
      return state;
    }
  }
}