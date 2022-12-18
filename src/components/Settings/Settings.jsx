import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Navigate } from "react-router-dom";

import EditProfile from './EditProfile/EditProfile'
import { getStatus, updateStatus } from '../../redux/slices/settings-slice'
import { logout } from '../../redux/slices/auth-slice'
import { withAuthNavigate } from '../hoc/withAuthNavigate';

const Settings = () => {
  const status = useSelector((state) => state.settings.status)
  const userId = useSelector((state) => state.auth.userId)
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStatus(userId))
  }, [userId, dispatch])

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="settings">
      Settings <br/>
      <EditProfile status={status} updateStatus={updateStatus} dispatch={dispatch} />
      <button onClick={handleLogout}>Log out</button>
      <span>{isAuth}</span>
    </div>
  )
}

export default withAuthNavigate(Settings)
