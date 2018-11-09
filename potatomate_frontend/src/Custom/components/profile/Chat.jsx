import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import { API_ROOT, HEADERS } from 'Custom/data';
import 'react-chat-widget/lib/styles.css';
import { ActionCable } from 'react-actioncable-provider';
class Chat extends Component {
  state={
    conversation_id:'',
    messageHistory:[]
  }
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");

  }

  componentDidUpdate(prevProps,prevState){
    if ((!prevProps.recipient||!prevProps.sender) && this.props.recipient.id&&this.props.sender ){

      fetch(`${API_ROOT}/conversations`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({title:'first',recipient_id:this.props.recipient.id,sender_id:this.props.sender.id})
      }).then(res=>res.json())
      .then(json=>{
             this.setState({conversation_id:json.id})
             json.messages.forEach(({user_id,content})=>{
               user_id===this.props.sender.id?addUserMessage(content):addResponseMessage(content)
             })
             })
        //check do two users have conversations before,if not set firstChat to be true
    }
  }

  handleNewUserMessage = (newMessage) => {
      fetch(`${API_ROOT}/messages`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({content:newMessage,user_id:this.props.sender.id,conversation_id:this.state.conversation_id})
      })
  }


  render() {
    console.log(this.props);
    return (
      <div className="App">

        <ActionCable
            key={this.state.conversation_id}
            channel={{ channel: 'MessagesChannel', conversation: this.state.conversation_id }}
            onReceived={(res)=>{
              console.log(res);
              if (res.user_id!=this.props.sender.id) {
                addResponseMessage(res.content)}
              }
            }
          />
      <Widget
        handleNewUserMessage={this.handleNewUserMessage}
        profileAvatar={this.props.recipient.avatar}
        title={`Say Hi to ${this.props.recipient.username} Now :)`}
        subtitle="some thing"

      />
      </div>
    );
  }
}

export default Chat;
