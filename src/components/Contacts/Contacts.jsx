import { useRef, useCallback } from 'react'

import Pagination from './Pagination/Pagination'
import useContacts from './useContacts'
import Spinner from '../common/Spinner/Spinner'
import User from './User'


const Contacts = () => {

  const { hasMoreContacts, contacts, pageSize, contactsCount, currentPage, isLoaded, onPageClick, toNextPage } = useContacts()

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
      <Pagination contactsCount={contactsCount} pageSize={pageSize} currentPage={currentPage} onPageClick={onPageClick} />
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

export default Contacts
