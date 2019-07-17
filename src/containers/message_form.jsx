import React, { Component } from 'react';
class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
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
export default MessageForm;