import React from 'react'

const Message = ({ id, text, date, role }) => {
  return (
    <div
      id={`${text.split(' ')[0]}-${id}`}
      className={`message message--${role}`}
    >
      <span className="message__text">{text}</span>
      <small className="message__date">{date}</small>
    </div>
  )
}

export default Message