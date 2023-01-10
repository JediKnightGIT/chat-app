import { useRef, useCallback } from 'react'
import ReactModal from 'react-modal'

// import Pagination from './Pagination/Pagination'
import useContacts from './useContacts'
import Spinner from '../common/Spinner/Spinner'
import User from './User'


const Contacts = () => {

  const { hasMoreContacts, contacts, currentPage, isLoaded, toNextPage } = useContacts()

  const observer = useRef()
  const lastUserElementRef = useCallback((node) => {
    if (isLoaded) return

    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMoreContacts) {
        toNextPage(currentPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [hasMoreContacts, isLoaded, currentPage, toNextPage])

  // if (isLoaded) return <Spinner />

  return (
    <section className="contacts">
      {/* <Pagination contactsCount={contactsCount} pageSize={pageSize} currentPage={currentPage} onPageClick={onPageClick} /> */}
      <div className="contacts__list">
        {
          contacts.map((user, index) => {
            if (contacts.length === index + 1) {
              return <User ref={lastUserElementRef} user={user} key={user.id} />
            } else {
              return <User user={user} key={user.id} />
            }
          })
        }
      </div>
      {isLoaded && <Spinner />}
    </section>
  )
}

export function ContactsModal({ modalShown, setModalShown }) {
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
        <h2 className="modal-header__title">Contacts</h2>
      </div>
      <Contacts />
      <div className="modal-footer">
        <button className="close-modal" onClick={closeModal}>Close</button>
      </div>
    </ReactModal>
  )
}

export default ContactsModal
