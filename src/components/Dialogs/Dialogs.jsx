import React from 'react'
import ReactModal from 'react-modal'

import { withAuthNavigate } from "../hoc/withAuthNavigate";
import Chat from './Chat/Chat'
import Message from './Message/Message'
import MessageBox from './MessageBox/MessageBox'
import UserInfoContainer from './UserInfo/UserInfo'
import useDialogs from './useDialogs';

const Dialogs = () => {
  const { dialogs, messages, modal, onToggleUserInfoModal } = useDialogs()

  // const onToggleUserInfoModal = () => {
  //   handleUserInfoModal()
  // }

  const dialogsElements = dialogs.map((dialog) => (
    <Chat {...dialog} key={`${dialog.username}-${dialog.id}`} />
  ))

  const messagesElements = messages.map((message) => (
    <Message {...message} key={`${message.text.split(' ')[0]}-${message.id}`} />
  ))

  return (
    <section className="dialogs">
      <div className="dialogs-header">
        <ReactModal isOpen={modal} appElement={document.getElementById('root') || undefined}>
          <button onClick={onToggleUserInfoModal}>Close modal</button>
          <UserInfoContainer />
        </ReactModal>
        <div onClick={onToggleUserInfoModal} className="dialogs-header__chat">
          <img src="https://loremflickr.com/320/320" alt="header avatar" width="40" height="40" className="dialogs-header__avatar" />
          <span className="dialogs-header__chat-name"></span>
        </div>

        <div className="dialogs-header__tools-container">Pinned + Search + Tools</div>
      </div>

      <div className="dialogs__list">{dialogsElements}</div>

      <div className="dialogs__messages messages">
        <div className="messages__list">
          {messagesElements}
        </div>

        <MessageBox />
      </div>

    </section>
  )
}

const DialogsCompose = withAuthNavigate(Dialogs)

export default DialogsCompose