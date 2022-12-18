import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUsers } from '../../redux/slices/contacts-slice'

const useContacts = () => {
  const contacts = useSelector((state) => state.contactsPage.contacts)

  // const contacts = useSelector((state) => state.contactsPage.contacts)
  const pageSize = useSelector((state) => state.contactsPage.pageSize)
  const contactsCount = useSelector((state) => state.contactsPage.contactsCount)
  const hasMoreContacts = useSelector((state) => state.contactsPage.hasMoreContacts)
  const currentPage = useSelector((state) => state.contactsPage.currentPage)
  const isLoaded = useSelector((state) => state.contactsPage.isLoaded)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers(1, pageSize))
    console.log('bruh');
  }, [pageSize, dispatch])

  const onPageClick = (pageNumber) => {
    dispatch(getUsers(pageNumber, pageSize))
  }

  const toNextPage = (pageNumber) => {
    dispatch(getUsers(pageNumber, pageSize))
  }

  return { hasMoreContacts, contacts, pageSize, contactsCount, currentPage, isLoaded, onPageClick, toNextPage }
}

export default useContacts
