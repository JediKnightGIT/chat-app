import { useSelector, useDispatch } from 'react-redux'

const useSidebar = () => {
  const isModalShown = useSelector((state) => state.sidebar.isModalShown)
  const dispatch = useDispatch()
  return { isModalShown, dispatch }
}

export default useSidebar