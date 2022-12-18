// Old Redux
// import { combineReducers, legacy_createStore as createStore } from "redux";
// import profileReducer from './profile-reducer'
// import dialogsReducer from './dialogs-reducer'

// let reducers = combineReducers({
//   profilePage: profileReducer,
//   messagesPage: dialogsReducer
// })

// let store = createStore(reducers)

// Old Redux
// import profileReducer from './profile-reducer'

// Redux Toolkit 2022+
import { configureStore } from '@reduxjs/toolkit'

// import dialogsReducer from './dialogs-reducer'
// import contactsReducer from './contacts-reducer'
import sidebarReducer from './sidebar-reducer'

// RTK (Modern Redux)
import appSlice from './slices/app-slice'
import dialogsReducer from './slices/dialogs-slice'
import settingsReducer from './slices/settings-slice'
import authReducer from './slices/auth-slice'
import contactsReducer from './slices/contacts-slice'

const store = configureStore({
  reducer: {
    // profilePage: profileReducer,
    messagesPage: dialogsReducer,
    contactsPage: contactsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    settings: settingsReducer,
    app: appSlice
  }
})

window.store = store

export const RootState = store.getState
export const AppDispatch = store.dispatch

export default store