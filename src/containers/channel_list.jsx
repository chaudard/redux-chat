import React, { Component } from 'react';
import Channel from './channel';
class ChannelList extends Component {
    static defaultProps = {
        channels: [
            {name: "general"},
            {name: "react"},
            {name: "paris"}
        ]
      }
    renderList = () => {
        return this.props.channels.map( (channel) => <Channel channel={channel} key={channel.name}/>)
    }
    render() {
        return (
            <div className="channels-container">
              <span>Redux Chat</span>
              <ul>
                {this.renderList()}
              </ul>
            </div>
          );
    }
}
export default ChannelList;