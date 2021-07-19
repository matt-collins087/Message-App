import React, {useState} from 'react';
import Friend from './Friend';
import friendsList from '../friends.js';

const FriendsList = () => {
  const [friends, setFriends] = useState(friendsList);

  return (
    <div className="friends-list">
      <h1>Friend's List</h1>
      {friends.map((friend, index) => {
        return <Friend key={index} name={friend.name} img={friend.imgURL}/>
      })}
    </div>
  )
}

export default FriendsList