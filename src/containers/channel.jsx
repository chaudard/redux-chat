import React, { Component } from 'react';
class Channel extends Component {
    classes() {
        return "list-group-item selectable"
    }
    render() {
        return (
            <li className={this.classes()}>
                <h4>{this.props.channel.name}</h4>
            </li>
        )
    }
}
export default Channel;