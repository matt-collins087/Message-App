import React from 'react';
import Message from './Message';

const MessageList = (props) => {
  return (
    <div className="message-list">
      <h1>Messages</h1>
      {props.messages.map((message, i) => {
        return <Message key={i} message={message} />
      })}
    </div>
  )
}

export default MessageList;