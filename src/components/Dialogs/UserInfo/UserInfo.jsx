import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserInfo } from '../../../redux/slices/dialogs-slice';

import Spinner from '../../common/Spinner/Spinner';

const UserInfo = () => {
  const userInfo = useSelector((state) => state.messagesPage.userInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo(2))
  }, [dispatch]
  )

  if (!userInfo) {
    return <Spinner />
  }

  return (
    <section className="user-info">
      <img src={userInfo.photos.large} alt="" /><br />
      <span>Name: {userInfo.fullName}</span><br />
      <span>Bio: {userInfo.aboutMe}</span>
    </section>
  )
}

export default UserInfo;
