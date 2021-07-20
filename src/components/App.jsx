import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FriendsList from './FriendsList';
import MessageList from './MessageList';
import ChatBox from './ChatBox';

const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages(prevState => {
      return [...prevState, newMessage];
    });
  }

  return (
    <div className="website-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="body-container">
        <FriendsList />
        <MessageList messages={messages} />
      </div>
      <div className="footer-container">
        <ChatBox addMessage={addMessage}/>
        <Footer />
      </div>
    </div>
  )
}

export default App;