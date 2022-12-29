import { createSlice } from '@reduxjs/toolkit'
import { getAuthUserData } from './auth-slice'
// import { authAPI } from '../../api/api'

const initialState = {
  initialized: false,
}

const appSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInitialized(state, action) {
      state.initialized = true
    },
  },
})

// thunks
export const initializeApp = () => (dispatch) => {
  // Promise only
  // const promise = dispatch(getAuthUserData())
  // promise.then(() => dispatch(setInitialized()))

  // Promise + await
  return dispatch(getAuthUserData())
    .then(() => dispatch(setInitialized()))
}

export const { setInitialized } = appSlice.actions
export default appSlice.reducer
