// import React, { useEffect } from 'react'
// import axios from 'axios'


// const Contacts = ({ contacts, setContacts }) => {

//   useEffect(() => {
//     axios.get('https://social-network.samuraijs.com/api/1.0/users')
//     .then((response) => {
//       setContacts(response.data.items)
//     })
//   }, [])

//   const contactsList = contacts.map(({ id, photoURL, name, username, onlineStatus}) => 
//     <div key={id} className="contact">
//       <img src={photoURL != null ? photoURL : 'https://loremflickr.com/320/320'} alt="Contact's avatar" width="60" height="60" className="contact__img" />
//       <div className="contact__info">
//         <h3 className="contact__name">{name}</h3>
//         <span className="contact__online-status">{}</span>
//       </div>
//     </div>
//     )
  
//   return (
//     <section className="contacts">
//       {contactsList}
//     </section>
//   )
// }

// export default Contacts
