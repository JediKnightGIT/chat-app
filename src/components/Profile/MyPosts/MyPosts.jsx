import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Post from './Post/Post'

import { addPost, updateNewPostText } from '../../../redux/profile-reducer'

const MyPosts = () => {
  const posts = useSelector((state) => state.profilePage.posts)
  const newPostText = useSelector((state) => state.profilePage.newPostText)
  const dispatch = useDispatch()

  const postsElements = posts.map((post) => <Post {...post} key={`${post.message.split(' ')[0]}-${post.id}`} />)
  const newText = React.createRef()

  const onAddPost = () => {
    dispatch(addPost())
  }

  const onPostChange = () => {
    dispatch(updateNewPostText(newText.current.value))
  }

  return (
    <section className="posts">
      <h2 className="posts__title">Saved messages</h2>

      {postsElements}

      <div className="posts__new-post new-post">
        <textarea ref={newText} onChange={onPostChange} value={newPostText} id="new-post"  className="new-post__textarea" placeholder="What's new..."></textarea>
        <button onClick={onAddPost} className="new-post__send">Send</button>
      </div>
    </section>
  )
}

export default (MyPosts)
