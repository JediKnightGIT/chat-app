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
export const initializeApp = () => async (dispatch) => {
  const promise = dispatch(getAuthUserData())

  // promise.then(() => dispatch(setInitialized()))
  promise.then(() => dispatch(setInitialized()))
}

export const { setInitialized } = appSlice.actions
export default appSlice.reducer
