import { useState } from 'react'
import { useDispatch } from 'react-redux'

const useSidebar = () => {
  // const isModalShown = useSelector((state) => state.sidebar.isModalShown)
  const [modalShown, setModalShown] = useState({
    contacts: false,
    settings: false
  })

  const dispatch = useDispatch()
  return { modalShown, setModalShown, dispatch }
}

export default useSidebar