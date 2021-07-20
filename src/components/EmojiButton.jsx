import React, {useState} from 'react';
import Picker from 'emoji-picker-react';
import MoodIcon from '@material-ui/icons/Mood';

const EmojiButton = (props) => {
  const [isEmojiClicked, setIsEmojiClicked] = useState(false);

  const emojiClicked = () => {
    setIsEmojiClicked(!isEmojiClicked);
  };

  return (
    <div>
      <button className="emoji-button" onClick={emojiClicked}><MoodIcon /></button>
        {isEmojiClicked && <Picker disableSearchBar="true" disableSkinTonePicker="true" onEmojiClick={props.onEmojiClick} />}
    </div>
  )
}

export default EmojiButton;