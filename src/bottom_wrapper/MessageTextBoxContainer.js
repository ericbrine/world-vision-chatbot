import React, { Component } from "react";
import "./BottomWrapper.css";

class MessageTextBoxContainer extends Component {
  render() {
    return (
      <div className="message_input_wrapper">
        <input
          id="msg_input"
          className="message_input"
          placeholder="Type your messages here..."
          value={this.props.message}
          onChange={this.props.onChange}
          onKeyPress={this.props._handleKeyPress}
        />
      </div>
    );
  }
}

export default MessageTextBoxContainer;
