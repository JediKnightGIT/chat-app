import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Chat = ({ id, name, username, message }) => {
  let { userId } = useParams()
  userId = username
  return (
    <div className="dialogs__chat chat">
      <NavLink to={`/${userId}`} className="chat__link">
        <img
          src="https://loremflickr.com/320/320"
          width="60"
          height="60"
          alt={username}
          className="chat__img"
        />
        <div className="chat__text">
          <strong className="chat__name">{name}</strong>
          <p className="chat__message">{message}</p>
        </div>
        <div className="chat__misc">
          <small className="chat__date">04:51</small>
          <div className="chat__notification"></div>
        </div>
      </NavLink>
    </div>
  )
}

export default Chat
