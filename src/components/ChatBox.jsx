import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import EmojiButton from './EmojiButton';

const ChatBox = (props) => {
  const [newMessage, setNewMessage] = useState({
    name: '',
    imgURL: '',
    body: ''
  });

  const onEmojiClick = (event, emojiObject) => {
    setNewMessage((prevState) => {
      return {
        ...prevState,
        body: prevState.body + emojiObject.emoji
      }
    })
  };

  const handleNewMessage = (e) => {
    const { name, value } = e.target;
    setNewMessage((prevState) => {
      return {
        ...prevState,
        [name]: value,
        imgURL: 'https://image.flaticon.com/icons/png/512/147/147144.png'
      }
    });
  };

  const handleSendMessage = () => {
    props.addMessage(newMessage);
    setNewMessage({
      name: '',
      imgURL: '',
      body: ''
    });
  };

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      color: "rgb(255, 204, 93)",
      backgroundColor: "rgb(77, 77, 77)",
      '&:hover': {
        backgroundColor: "rgb(90, 90, 90)",
        color: "rgb(253, 201, 90)",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="chat-box-container">
      <div className="chat-box">
        <div className="chat-box-input">
          <label>Name:</label>
          <input onChange={handleNewMessage} type="text" name="name" placeholder="Enter name..." value={newMessage.name}></input>
        </div>
        <textarea onChange={handleNewMessage} row="15" name="body" cols="40" placeholder="Enter Message..." value={newMessage.body}></textarea>
      </div>
      <div className="send-button">
        <EmojiButton onEmojiClick={onEmojiClick}/>
        <Button
          onClick={handleSendMessage}
          variant="contained"
          className={classes.button}
          endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </div>
  )
}

export default ChatBox;