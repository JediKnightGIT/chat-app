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

  const openModal = (e, type) => {
    // setContactsModalShown(true)
    setModalShown((modalShown) => ({
      ...modalShown,
      [type]: true
    }))
    dispatch(setContacts([]))
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
            <ContactsModal modalShown={modalShown.contacts} setModalShown={setModalShown} />
            <button onClick={(e) => openModal(e, 'contacts')} className="sidebar__link">
              Contacts
            </button>
            <SettingsModal modalShown={modalShown.settings} setModalShown={setModalShown} />
            <button onClick={(e) => openModal(e, 'settings')} className="sidebar__link">
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
