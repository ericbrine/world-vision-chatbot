import React, { Component } from 'react';
import './BottomWrapper.css'

class SendButton extends Component{
    render(){
      return (<div className="send_message" onClick={this.props.handleClick}>
                <div className="text">send</div>
              </div>);
    }
}

export default SendButton;