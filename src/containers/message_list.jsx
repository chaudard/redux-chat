import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from './message';
import MessageForm from './message_form';
import { fetchMessages } from '../actions/index.js';

class MessageList extends Component {
    renderList = () => {
        return this.props.messages.map( (message) => <Message message={message} key={message.id}/>)
    }
    componentWillMount() {
        this.props.fetchMessages('general');
    }
    render() {
        return (
            <div className="message-list">
                {this.renderList()}
                <MessageForm />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
    );
}

function mapReduxStateToProps(reduxState) {
    return {
      messages: reduxState.messages
    };
}
  
export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);