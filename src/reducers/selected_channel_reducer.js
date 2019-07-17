import { SELECT_CHANNEL } from '../actions/index.js';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_CHANNEL: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}