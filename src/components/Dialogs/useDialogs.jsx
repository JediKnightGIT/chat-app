import { useState } from 'react'
import { useSelector } from 'react-redux'

const useDialogs = () => {
  const dialogs = useSelector((state) => state.messagesPage.dialogs)
  const messages = useSelector((state) => state.messagesPage.messages)
  const newMessage = useSelector((state) => state.messagesPage.newMessage)

  const [modal, setModal] = useState(false)

  const onToggleUserInfoModal = () => {
    setModal((modal) => !modal)
  }
  
  return { dialogs, messages, newMessage, modal, onToggleUserInfoModal }
}

export default useDialogs