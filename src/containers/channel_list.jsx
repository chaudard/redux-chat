import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel } from '../actions/index';

import Channel from './channel';

class ChannelList extends Component {
      handleClick = (channel) => {
        this.props.selectChannel(channel);
      }    
      channelClasses(channel) {
        if (channel.name === this.props.selectedChannel.name) {
          return 'active'
        } else {
          return null
        }
      }
      renderChannel = (channel) => {
        return (
          <li className={this.channelClasses(channel)} onClick={() => this.handleClick(channel)} key={channel.name}>
            #{channel.name}
          </li>
        );
      }
      render() {
        return (
            <div className="channels-container">
              <span>Redux Chat</span>
              <ul>
                {this.props.channels.map((channel) => this.renderChannel(channel))}
              </ul>
            </div>
          );
    }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
