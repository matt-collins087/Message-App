import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <div>
        <img className="avatar" src={props.message.imgURL} alt="avatar"></img>
        <h3>{props.message.name}</h3>
      </div>
      <p>{props.message.body}</p>
      <div></div>
    </div>
  )
}

export default Message;