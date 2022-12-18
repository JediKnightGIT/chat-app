import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import { getAuthUserData } from '../../redux/auth-reducer'

const Auth = () => {
  // const userId = useSelector((state) => state.auth.userId)
  const login = useSelector((state) => state.auth.login)
  // const email = useSelector((state) => state.auth.email)
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getAuthUserData())
  }, [dispatch])

  return (
    <div className="auth">
      {isAuth && ('Logged as ' + login)}
      {/* UserId: {userId} - Email: {email} - Login: {login} - isAuth: {isAuth ? 'yep' : 'bruh'} */}


    </div>
  )
}

export default Auth
