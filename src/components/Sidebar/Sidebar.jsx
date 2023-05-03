import React from 'react'
import { NavLink } from 'react-router-dom'

// import { openModal } from '../../redux/sidebar-reducer'
import FieldSearch from '../SearchField/SearchField'
import ContactsModal from '../Contacts/Contacts'
import useSidebar from './useSidebar'
import { setContacts } from '../../redux/slices/contacts-slice'
import SettingsModal from '../Settings/Settings'

const Sidebar = () => {
  const { modalShown, setModalShown, dispatch } = useSidebar()

  const openModal = (type, e) => {
    setModalShown((modalShown) => ({
      ...modalShown,
      [type]: true
    }))
    dispatch(setContacts([]))
  }

  const closeModal = () => {
    setModalShown((modals) => {
      return Object.fromEntries(Object.keys(modals)
        .map((key) => [key, false]))
    })
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header__button-container">
          <div className="burger-container">
            <button className="burger-button" aria-label="Sidebar toggler">
              <div className="menu-icon"></div>
            </button>
          </div>
          <div className="sidebar-header__menu">
            <NavLink end to="/" className="sidebar__link">
              Messages
            </NavLink>
            <ContactsModal modalShown={modalShown.contacts} setModalShown={setModalShown} closeModal={closeModal} />
            <button onClick={() => openModal('contacts')} className="sidebar__link">
              Contacts
            </button>
            <SettingsModal modalShown={modalShown.settings} setModalShown={setModalShown} openModal={openModal} closeModal={closeModal} />
            <button onClick={() => openModal('settings')} className="sidebar__link">
              Settings
            </button>
          </div>
        </div>

        <FieldSearch />
      </div>
    </aside>
  )
}

export default Sidebar
