import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selected_channel_reducer from '../reducers/selected_channel_reducer';

import { createMessage } from '../actions/index.js';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createMessage(this.props.selectedChannel.name, this.props.currentUser, this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    message:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    { createMessage: createMessage },
    dispatch
    );
}
  
function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        selectedChannel: state.selectedChannel
    };
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
  