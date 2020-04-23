import React, { Component } from "react";
import UserMessageBox from "./UserMessageBox";
import "./Messages.css";

class MessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.createBotMessages = this.createBotMessages.bind(this);
  }

  scrollToBottom = () => {
    var el = this.refs.scroll;
    el.scrollTop = el.scrollHeight;
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  createBotMessages() {
    console.log(this.props.messages);
    return this.props.messages.map((message, index) => (
      <UserMessageBox
        key={index}
        message={message["message"]}
        appearance={message["isbotmessage"] ? "left" : "right"}
      />
    ));
  }

  render() {
    return (
      <ul className="messages" ref="scroll">
        {this.createBotMessages()}
      </ul>
    );
  }
}

export default MessagesContainer;
