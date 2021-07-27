import React from 'react';
import Message from './Message';

const MessageList = (props) => {

  const messages = [
    {
      name: "Matt",
      imgURL: "https://image.flaticon.com/icons/png/512/147/147144.png",
      body: "Lorem Ipsum My Asshole!"
    },
    {
      name: "Shelbi",
      imgURL: "https://image.flaticon.com/icons/png/512/194/194938.png",
      body: "Hello Worldd!!!"
    }
  ];


  return (
    <div className="message-list">
      <h1>Messages</h1>
      {messages.map((message, i) => {
        return <Message key={i} message={message} />
      })}
    </div>
  )
}

export default MessageList;