import React from 'react';
import Message from './Message';

const MessageList = (props) => {
  return (
    <div className="message-list">
      <h1>Messages</h1>
      {props.messages.map(message => {
        return <Message message={message} />
      })}
    </div>
  )
}

export default MessageList;