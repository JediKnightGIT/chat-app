// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import { getUsers, contactsSelector } from '../../redux/slices/contacts-slice'
// import Contacts from './Contacts'
// import Spinner from '../common/Spinner/Spinner'

// const ContactsContainer = () => {
//   const contacts = useSelector(contactsSelector)
//   // const contacts = useSelector((state) => state.contactsPage.contacts)
//   const pageSize = useSelector((state) => state.contactsPage.pageSize)
//   const contactsCount = useSelector((state) => state.contactsPage.contactsCount)
//   const currentPage = useSelector((state) => state.contactsPage.currentPage)
//   const isLoaded = useSelector((state) => state.contactsPage.isLoaded)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getUsers(currentPage, pageSize))
//   }, [currentPage, pageSize, dispatch])

//   const onPageClick = (pageNumber) => {
//     dispatch(getUsers(pageNumber, pageSize))
//   }

//   return (
//     <>
//       {isLoaded
//         ? <Spinner />
//         : <Contacts contactsCount={contactsCount} pageSize={pageSize} currentPage={currentPage}
//           contacts={contacts} onPageClick={onPageClick}
//         />}
//     </>
//   )
// }

// export default ContactsContainer
