import React from 'react'

const User = React.forwardRef(({ user, username, onlineStatus }, ref) => {

  return (
    <div ref={ref} id={user.id} className="contact">
      <img
        src={'https://loremflickr.com/320/320'}
        alt="Contact's avatar"
        width="60"
        height="60"
        className="contact__img"
      />
      <div className="contact__info">
        <h3 className="contact__name">{user.name}</h3>
        <span className="contact__online-status">{ }</span>
      </div>
    </div>
  )
})

export default User
