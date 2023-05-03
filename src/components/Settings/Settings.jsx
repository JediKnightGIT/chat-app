import { useRef } from 'react'
import ReactModal from 'react-modal'
import classnames from 'classnames'

import useSettings from './useSettings'
import EditProfile from './EditProfile/EditProfile'
import { logout } from '../../redux/slices/auth-slice'
import Avatar from './Avatar'
// import { withAuthNavigate } from '../hoc/withAuthNavigate';


const Settings = ({ modalShown, closeModal }) => {
  const { profile, status, isAuth, updateStatus, dispatch, settings, setSettings, isScrollTop, handleScroll, position, incPosition, decPosition, resetPosition, onPhotoSelected, clearSettings, active, setActive } = useSettings()

  const modalContainer = useRef()

  const goBack = () => {
    dispatch(incPosition())
    setActive('general')
    clearSettings(active)
  }

  const goNext = (type) => {
    dispatch(decPosition())
    setSettings((s) => {
      return [...s, {[type]: settingsObj[type]}]
    })
    setActive(type)
  }

  const closeSettings = () => {
    clearSettings()
    closeModal()
    setTimeout(() => {
      dispatch(resetPosition())
    }, 200);
  }

  const settingsObj = {
    info: <EditProfile key={'info' + Math.floor(Date.now() / 1000)} profile={profile} status={status} position={position} closeModal={closeSettings} updateStatus={updateStatus} dispatch={dispatch} onPhotoSelected={onPhotoSelected} goBack={goBack} />,

    hey: <div key={'hey' + Math.floor(Date.now() / 1000)} className="modal-item">hey</div>
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  if (!profile) return ''
  // if (!profile) return <Spinner />

  return (
    <ReactModal
      isOpen={modalShown}
      appElement={document.getElementById('root') || undefined}
      className={{
        base: "modal modal__settings",
        afterOpen: "modal__settings--after-open",
        beforeClose: "modal__settings--before-close",
      }}
      overlayClassName="overlay"
      onRequestClose={closeSettings}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={200}
    >
      <div ref={modalContainer} style={{ transform: `translateX(${position * 100}%)` }} className="modal-container">
        {/* Settings */}
        <div className={classnames("modal-item", { "active": position === 0 })}>
          <div className={classnames("modal-header", { "bordered": isScrollTop })}>
            <h2 className="modal-header__title">Settings</h2>
            <button className="cross-modal" onClick={closeSettings}>✕</button>
          </div>

          <div className="settings" onScroll={handleScroll}>
            <div className="settings__top">
              <Avatar className="settings__avatar-wrapper" profile={profile} onPhotoSelected={onPhotoSelected} />
              <div className="main-data">
                <span className="main-data__name">{profile.fullName}</span>
                <span className="main-data__username">@{profile.aboutMe}</span>
              </div>
            </div>

            <div className="spacing"></div>

            <ul className="settings__menu">
              <li className="settings__item settings__item--profile" onClick={() => goNext('info')}>Edit Profile</li>
              <li className="settings__item settings__item--chat">Chat Settings</li>
              <li className="settings__item settings__item--hey" onClick={() => goNext('hey')}>hey</li>
            </ul>

            <button onClick={handleLogout}>Log out</button>
            <span>{isAuth}</span>
          </div>
        </div>

        {settings.map((setting, i) => setting[Object.keys(setting)[0]])}

      </div>
    </ReactModal>
  )
}

export default Settings
