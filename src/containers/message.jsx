import React, { Component } from 'react';
class Message extends Component {
    render() {
        return (
            <li className="list-group-item">
                <h5>{this.props.message.author}</h5>
                {this.props.message.content}
            </li>
        )
    }
}
export default Message;