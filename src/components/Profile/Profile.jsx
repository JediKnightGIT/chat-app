import React from 'react'
import MyPostsContainer from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  
  return (
    <div className="profile-block">
      <div className="content__bg-img"></div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
