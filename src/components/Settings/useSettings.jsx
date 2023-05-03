import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProfile, getStatus, updateStatus, setPhoto, incPosition, decPosition, resetPosition } from '../../redux/slices/settings-slice'

const useSettings = () => {
  const profile = useSelector((state) => state.settings.profile)
  const status = useSelector((state) => state.settings.status)
  const position = useSelector((state) => state.settings.position)
  const userId = useSelector((state) => state.auth.userId)
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  const [isScrollTop, setIsScrollTop] = useState(false)
  const [settings, setSettings] = useState([])
  const [active, setActive] = useState('general')
  
  useEffect(() => {
    dispatch(getProfile(userId))
    dispatch(getStatus(userId))
  }, [userId, dispatch])

  const onPhotoSelected = (event) => {
    if (event.target.files.length) {
      dispatch(setPhoto(event.target.files[0]))
    }
  }

  const clearSettings = () => {
    setTimeout(() => {
      setSettings([])
    }, 200);
  }

  // Adding border line when scrollTop property > 0 and removing otherwise
  const handleScroll = (e) => {
    setIsScrollTop(e.target.scrollTop > 0)
  }

  return { profile, status, userId, isAuth, updateStatus, dispatch, settings, setSettings, isScrollTop, handleScroll, position, incPosition, decPosition, resetPosition, onPhotoSelected, clearSettings, active, setActive }
}

export default useSettings