import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactModal from 'react-modal'
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
      <EditProfile userId={userId} profile={profile} status={status} getStatus={getStatus} updateStatus={updateStatus} setPhoto={setPhoto} dispatch={dispatch} />
      <button onClick={handleLogout}>Log out</button>
      <span>{isAuth}</span>
    </div>
  )
}

export function SettingsModal({ modalShown, setModalShown }) {
  const closeModal = () => setModalShown(false)

  return (
    <ReactModal
      isOpen={modalShown}
      appElement={document.getElementById('root') || undefined}
      className="modal"
      overlayClassName="overlay"
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={300}
    >
      <div className="modal-header">
        <h2 className="modal-header__title">Settings</h2>
      </div>
      <Settings />
      <div className="modal-footer">
        <button className="close-modal" onClick={closeModal}>Close</button>
      </div>
    </ReactModal>
  )
}

export default SettingsModal
