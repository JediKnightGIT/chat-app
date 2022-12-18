import React from 'react'

const ContactsC = ({ contactsCount, pageSize, currentPage, contacts, onPageClick}) => {

    const pagesCount = Math.ceil(contactsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) 
      pages.push(i)

    const pagesHTML = pages.map((p) => {
      return (
        <span key={'page' + p} onClick={() => onPageClick(p)} className={currentPage === p ? 'page active' : 'page'}>{p}</span>
      )
    })

    const contactsList = contacts.map(
      ({ id, photoURL, name, username, onlineStatus }) => (
        <div key={id} className="contact">
          <img
            src={
              photoURL != null ? photoURL : 'https://loremflickr.com/320/320'
            }
            alt="Contact's avatar"
            width="60"
            height="60"
            className="contact__img"
          />
          <div className="contact__info">
            <h3 className="contact__name">{name}</h3>
            <span className="contact__online-status">{}</span>
          </div>
        </div>
      )
    )
    return <section className="contacts">
      {contactsList}
      <div className="pagination">{pagesHTML}</div>
    </section>
}

export default ContactsC
