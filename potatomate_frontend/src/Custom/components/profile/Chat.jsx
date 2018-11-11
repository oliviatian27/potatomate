import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import { API_ROOT, HEADERS } from 'Custom/data';
import 'react-chat-widget/lib/styles.css';
import { ActionCable } from 'react-actioncable-provider';
import {connect} from 'react-redux'
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import {fetchConversation} from 'actions/action'
class Chat extends Component {
  constructor(props){
    super(props)
    this.state={
      conversation_id:'',
      newMessage:''
    }
  }
  componentDidMount() {
    addResponseMessage("How are you doing today?");
    this.props.fetchConversation(this.props.recipient_id)
  }



  componentDidUpdate(prevProps,prevState){
    if ((!prevProps.user.conversation.messages) && this.props.user.conversation.messages&&this.props.user.user&&this.props.user.user.id ){

      this.props.user.conversation.messages.forEach(({user_id,content})=>{
        user_id===this.props.user.user.id?addUserMessage(content):addResponseMessage(content)
      })

    }
  }

  handleNewUserMessage = (newMessage) => {
      fetch(`${API_ROOT}/messages`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({content:newMessage,user_id:this.props.sender.id,conversation_id:this.props.user.conversation.id,recipient_id:this.props.recipient_id})
      })
  }


  render() {
    return (
      <div className="App">

        <ActionCable
            key={this.props.user.conversation.id}
            channel={{ channel: 'MessagesChannel', conversation: this.props.user.conversation.id }}
            onReceived={(res)=>{

              if (res.user_id!=this.props.sender.id) {
                addResponseMessage(res.content)
                  this.setState({newMessage:res})  }
              }
            }
          />

          {this.state.newMessage?(<div>
            <SnackbarContent
     message={
         <span>
           <b>{this.state.newMessage.user.username}says:</b> {this.state.newMessage.content}
         </span>
     }
     close
     color="success"
     autoHideDuration="3"
     icon="info_outline"
   /> <Clearfix /></div>) :null}
   {/*
     this.state.newMessages.map(message=>(<div>
           <SnackbarContent
      message={
        <span>
          <b>{message.user.username}says:</b> {message.content}
        </span>
      }
      close={
        ()=>{
          this.state.newMessages.shift();
          this.setState({
            newMessages:this.state.newMessages
          })
        }
      }
      color="success"
      autoHideDuration="3"
      icon="info_outline"
      /> <Clearfix /></div>) )
     */ }

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

export default connect(({user})=>({user}),{fetchConversation})(Chat);
