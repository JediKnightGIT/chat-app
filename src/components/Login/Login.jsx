import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from "react-router-dom";

import { login } from '../../redux/slices/auth-slice'
// import { useAuth } from "../../useAuth";
import { FormInput } from "../common/Input/Input";
// import Spinner from "../common/Spinner/Spinner";
import { emailValidator, required } from "../common/utils/validators";

const Login = () => {

  const { register, handleSubmit, formState: { errors }, setError, clearErrors, reset } = useForm()

  // const { initialized } = useAuth()

  const captcha = useSelector((state) => state.auth.captcha)
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    alert(`${data.email}, ${data.password}, ${data.rememberMe}, ${data.captcha}`);
    dispatch(login(data.email, data.password, data.rememberMe, data.captcha, setError))
    reset()
  }

  // Common error message is cleared when user starts to interact with fields
  const handleErrors = () => {
    clearErrors('credentials')
  }

  // if (!initialized) {
  //   return <Spinner />
  // } else {
  //   return <Navigate to="/" />
  // }

  if (isAuth) return <Navigate to="/" />
  return (
    <section className="login">
      <img src="https://loremflickr.com/320/320" width="60" height="60" alt="Logo" />
      <h1 className="auth__title">Convogram</h1>
      <p className="auth__par">Please enter your credentials.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <FormInput name="email" id="sign-in-email" type="email" label="Email" className="input-group"
          onFocus={handleErrors}
          register={register}
          rules={emailValidator('Email Address')}
          errors={errors}
        />
        <FormInput name="password" id="sign-in-password" type="password" label="Password" className="input-group"
          onFocus={handleErrors}
          register={register}
          rules={required('Password')}
          errors={errors}
        />
        <FormInput name="rememberMe" id="sign-in-remember-me" type="checkbox" label="Keep me signed in" className="input-group"
          onFocus={handleErrors}
          register={register}
          errors={errors}
        />

        {
          !!captcha && <div className="login__captcha">
            <img src={captcha} alt="Captcha" />
            <FormInput name="captcha" id="sign-in-captcha" type="password" label="Captcha" className="input-group"
              onFocus={handleErrors}
              register={register}
              rules={required('Captcha')}
              errors={errors}
            />
          </div>
        }

        <button className="login-form__submit" type="submit">Log in</button>
        {errors.credentials && <div style={{ color: 'red' }}>{errors.credentials.message}</div>}
      </form>

      jehade6103@hostovz.com <br />
      cherchun
    </section>

  )
}

export default Login