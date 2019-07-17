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
        this.fetchMessages();
    }

    componentDidMount() {
        this.refresher = setInterval(this.fetchMessages, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.refresher);
    }

    fetchMessages = () => {
        this.props.fetchMessages(this.props.selectedChannel.name);
    }    
    componentDidUpdate() {
        this.list.scrollTop = this.list.scrollHeight;
    }
               
    render() {
        return (
            <div className="channel-container">
                <div className="channel-title">
                    <span>Channel #{this.props.selectedChannel.name}</span>
                </div>
                <div className="channel-content" ref={(list) => { this.list = list; }}>
                    {this.renderList()}
                </div>
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
      messages: reduxState.messages,
      selectedChannel: reduxState.selectedChannel
    };
}
  
export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);