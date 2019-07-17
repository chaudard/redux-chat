// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import MessagesReducer from './reducers/messages_reducer.js';
import ChannelsReducer from './reducers/channels_reducer.js';
import SelectedChannelReducer from './reducers/selected_channel_reducer.js';

// State and reducers
const identityReducer = (state = null) => state;
const reducers = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  selectedChannel: SelectedChannelReducer,
  currentUser: identityReducer // because the user never change
});

const initialState = {
  messages: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channels: [ {name: "general"},{name: "react"},{name: "paris"} ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: {name: "general"}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 10 }) || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise,logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
