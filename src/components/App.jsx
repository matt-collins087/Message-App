import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FriendsList from './FriendsList';
import MessageList from './MessageList';
import messages from '../messages';
import ChatBox from './ChatBox';

const App = () => {
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
        <ChatBox />
        <Footer />
      </div>
    </div>
  )
}

export default App;