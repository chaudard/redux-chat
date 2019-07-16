// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import MessagesReducer from './reducers/messages_reducer.js';
import ChannelsReducer from './reducers/channels_reducer.js';
import SelectedChannelReducer from './reducers/selected_channel_reducer.js';
// State and reducers
const reducers = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  selectedChannel: SelectedChannelReducer
});

const initialState = {
  messages: [],
  channels: [ {name: "general"},{name: "react"},{name: "paris"} ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: {name: "general"}
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
