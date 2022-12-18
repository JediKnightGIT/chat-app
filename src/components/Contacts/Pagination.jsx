import React from 'react'

const Pagination = ({ contactsCount, pageSize, currentPage, onPageClick}) => {

    const pagesCount = Math.ceil(contactsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++)
      pages.push(i)

    const pagesHTML = pages.map((p) => {
      return (
        <span key={'page' + p} onClick={() => onPageClick(p)} className={currentPage === p ? 'page active' : 'page'}>{p}</span>
      )
    })
    return <section className="contacts">
      <div className="pagination">{pagesHTML}</div>
    </section>
}

export default Pagination
