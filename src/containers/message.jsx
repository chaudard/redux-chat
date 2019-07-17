import React, { Component } from 'react';
import { emojify } from 'react-emojione';

function strToRGB(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
    return `#${"00000".substring(0, 6 - c.length)}${c}`;
  }

class Message extends Component {
    render() {
        return (
            <li className="list-group-item">
                <h5 style={{ color: strToRGB(this.props.message.author) }}>{this.props.message.author}</h5>
                {emojify(this.props.message.content)}
            </li>
        )
    }
}
export default Message;