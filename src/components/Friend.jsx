import React from 'react';


const Friend = (props) => {
  return (
    <div className="friend">
      <img className="avatar" src={props.img} alt="avatar"></img>
      <p>{props.name}</p>
      <p>{props.id}</p>
    </div>
  )
}

export default Friend;