import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactModal from 'react-modal'

import { openModal } from '../../redux/sidebar-reducer'
import FieldSearch from '../SearchField/SearchField'
import Contacts from '../Contacts/Contacts'
import useSidebar from './useSidebar'
import { setContacts } from '../../redux/slices/contacts-slice'

const Sidebar = () => {
  const { isModalShown, dispatch } = useSidebar()

  const handleModal = () => {
    dispatch(openModal())
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
            <ReactModal
              isOpen={isModalShown}
              appElement={document.getElementById('root') || undefined}
            >
              <button onClick={handleModal}>Close modal</button>
              <Contacts />
            </ReactModal>
            <button onClick={handleModal} className="sidebar__link">
              Contacts
            </button>
            <NavLink to="/settings" className="sidebar__link">
              Settings
            </NavLink>
          </div>
        </div>

        <FieldSearch />
      </div>
    </aside>
  )
}

export default Sidebar
