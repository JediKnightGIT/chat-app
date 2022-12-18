import React from 'react'

const Post = ({ message, likes }) => {
  return (
    <div className="post">
      <div className="post__content">
        <img src="https://loremflickr.com/320/320" alt="User" width="50" height="50" className="post__img" />
        <p className="post__text">{message}</p>
      </div>
      
      <div className="post__reactions reactions">
        <div className="reactions__item reactions__item--like" aria-label="Like">👍 <span className="reactions__count">{likes}</span></div>
      </div>
    </div>
  )
}

export default Post
