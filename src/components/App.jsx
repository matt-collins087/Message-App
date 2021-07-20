import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FriendsList from './FriendsList';
import ChatBox from './ChatBox';

const App = () => {
  return (
    <div>
      <Header/>
      <FriendsList/>
      <ChatBox/>
      <Footer />
    </div>
  )
}

export default App;