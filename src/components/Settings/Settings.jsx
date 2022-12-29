import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Navigate } from "react-router-dom";

import EditProfile from './EditProfile/EditProfile'
import { getProfile, getStatus, updateStatus, setPhoto } from '../../redux/slices/settings-slice'
import { logout } from '../../redux/slices/auth-slice'
import { withAuthNavigate } from '../hoc/withAuthNavigate';

const Settings = () => {
  const profile = useSelector((state) => state.settings.profile)
  const status = useSelector((state) => state.settings.status)
  const userId = useSelector((state) => state.auth.userId)
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile(userId))
    dispatch(getStatus(userId))
  }, [userId, dispatch])

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="settings">
      <h2>Settings</h2> <br/>
      <EditProfile profile={profile} status={status} updateStatus={updateStatus} setPhoto={setPhoto} dispatch={dispatch} />
      <button onClick={handleLogout}>Log out</button>
      <span>{isAuth}</span>
    </div>
  )
}

export default withAuthNavigate(Settings)
