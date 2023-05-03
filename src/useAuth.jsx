import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { initializeApp } from './redux/slices/app-slice'

export const useAuth = () => {
  // const userId = useSelector((state) => state.auth.userId)
  // const login = useSelector((state) => state.auth.login)
  // const email = useSelector((state) => state.auth.email)
  // const isAuth = useSelector((state) => state.auth.isAuth)
  const initialized = useSelector((state) => state.app.initialized)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getAuthUserData())
    dispatch(initializeApp())
  }, [dispatch])

  // return (
  //   <div className="auth">
  //     {isAuth && ('Logged as ' + login)} 
  //      {/* UserId: {userId} - Email: {email} - Login: {login} - isAuth: {isAuth ? 'yep' : 'bruh'} */}


  //   </div>
  // )

  return { initialized }
  // return { userId, login, email, isAuth }
}