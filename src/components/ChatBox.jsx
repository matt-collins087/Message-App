import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import MoodIcon from '@material-ui/icons/Mood';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

const ChatBox = () => {
  const [newMessage, setNewMessage] = useState({});
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isEmojiClicked, setIsEmojiClicked] = useState(false);

  const emojiClicked = () => {
    setIsEmojiClicked(!isEmojiClicked);
  };

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
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
          <input type="text" placeholder="Enter name..."></input>
        </div>
        <textarea row="15" cols="40" placeholder="Enter Message..."></textarea>
      </div>
      <div className="send-button">
        <button className="emoji-button" onClick={emojiClicked}><MoodIcon /></button>
        {isEmojiClicked && <Picker disableSearchBar="true" disableSkinTonePicker="true" onEmojiClick={onEmojiClick} />}
        <Button
          variant="contained"
          color="warning"
          className={classes.button}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </div>
  )
}

export default ChatBox;