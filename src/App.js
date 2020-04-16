import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './top_menu/TopMenu';
import SendButton from './bottom_wrapper/SendButton';
import MessageTextBoxContainer from './bottom_wrapper/MessageTextBoxContainer';
import MessagesContainer from './messages/MessageContainer';


class ChatApp extends Component {
  constructor(props){
    super(props);
    this.state = {"messages": [], "current_message":""}
    this.handleClick = this.handleClick.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addMessageBox = this.addMessageBox.bind(this);
  }

  addMessageBox(enter=true){
    let messages = this.state.messages;
    let current_message = this.state.current_message;
    console.log(this.state);
    if(current_message && enter){
      messages = [...messages, {"message":current_message}];
      fetch("/message", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: current_message }),
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            messages: [...messages, {"message":result["response"], "isbotmessage":true}]
          });
        },
        (error) => {
          //do nothing for now
        }
      );
      current_message = ""
    }  
    this.setState({
      current_message: current_message,
      messages
    });

  }

  handleClick(){
    this.addMessageBox();
  }

  onChange(e) {
    this.setState({
      current_message: e.target.value
    });  
  }

    _handleKeyPress(e) {
    let enter_pressed = false;
    if(e.key === "Enter"){
      enter_pressed = true;
    }
    this.addMessageBox(enter_pressed)
  }

  render() {
    return (
      <div>
        <TopMenu></TopMenu>
        <div className="chat_window">
          <MessagesContainer messages={this.state.messages}></MessagesContainer>
          <div className="bottom_wrapper clearfix">
            <MessageTextBoxContainer 
              _handleKeyPress={this._handleKeyPress} 
              onChange={this.onChange} 
              message={this.state.current_message}></MessageTextBoxContainer>
            <SendButton handleClick={this.handleClick}></SendButton>
          </div>
        </div>
      </div>
    );
  }
}



export default ChatApp;
