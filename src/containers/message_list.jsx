import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from './message';
import MessageForm from './message_form';

class MessageList extends Component {
    renderList = () => {
        return this.props.messages.map( (message) => <Message message={message} key={message.created_at}/>)
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

function mapReduxStateToProps(reduxState) {
    return {
      messages: reduxState.messages
    };
}
  
export default connect(mapReduxStateToProps)(MessageList);