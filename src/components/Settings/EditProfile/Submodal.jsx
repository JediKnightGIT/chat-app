import React from 'react'
import ReactModal from 'react-modal';

const Submodal = ({ title, subModal, handleSubModal, children }) => {
  return (
    <ReactModal
      isOpen={subModal}
      appElement={document.getElementById('root') || undefined}
      className={{
        base: "modal modal__mini",
        afterOpen: "modal__mini--after-open",
        beforeClose: "modal__mini--before-close",
      }}
      overlayClassName="overlay overlay--mini"
      onRequestClose={handleSubModal}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={200}
      // parentSelector={() => document.querySelector('.modal__settings')}
    >
      <div className="modal-header modal-header--mini">
        {
          !!title &&
          <h2 className="modal-header__title modal-header__title--mini">{title}</h2>
        }
      </div>

      <div className="submodal-content">
        {children}
      </div>

      <div className="modal-footer modal-footer--mini">
        <div className="modal-footer__wrapper">
          <button className="close-modal" onClick={handleSubModal}>Cancel</button>
          <button className="close-modal" form="edit-profile-form" onClick={handleSubModal}>Save</button>
        </div>
      </div>
    </ReactModal>
  )
}

export default Submodal
