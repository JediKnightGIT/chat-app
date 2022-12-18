import { settingsAPI } from "../api/api";

const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'
const OPEN_USER_INFO_MODAL = "OPEN_USER_INFO_MODAL";
const SET_USER_INFO = "SET_USER_INFO";

const initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Adam Jensen',
      username: 'AJensen',
      message: 'I never asked for this...',
    },
    {
      id: 2,
      name: 'Bob Page',
      username: 'PBob',
      message: 'I never asked for this...',
    },
    {
      id: 3,
      name: 'David Sarif',
      username: 'DSarif',
      message: 'I never asked for this...',
    },
    {
      id: 4,
      name: 'Lucius de Beers',
      username: 'LBeers',
      message: "I'm cold...",
    },
    {
      id: 5,
      name: 'Miller',
      username: 'Miller',
      message: 'I never asked for this...',
    },
  ],
  messages: [
    { id: 1, text: 'Hello!', date: '18:09', role: 'sender' },
    { id: 2, text: "What's good, my friend?", date: '18:10', role: 'sender' },
    {
      id: 3,
      text: "I'm feeling fabulous today. What about you?",
      date: '18:20',
      role: 'recepient',
    },
    {
      id: 4,
      text: "I've been better, but it's okay nonetheless.",
      date: '18:22',
      role: 'sender',
    },
    {
      id: 5,
      text: 'Everybody has it sometimes',
      date: '18:34',
      role: 'recepient',
    },
  ],
  newMessage: '',
  userInfo: null
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE:
      const message = {
        id: 6,
        text: state.newMessage,
        date: `${new Date().getHours()}:${new Date().getMinutes()}`,
        role: 'recepient',
      }
      return {
        ...state,
        messages: [...state.messages, message],
        newMessage: '',
      }
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.text,
      }
    case OPEN_USER_INFO_MODAL:
      return {
        ...state,
        isModalShown: !state.isModalShown
      }
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    default:
      return state
  }
}

export const sendNewMessage = () => ({ type: SEND_NEW_MESSAGE })
export const updateNewMessage = (newText) => ({
  type: UPDATE_NEW_MESSAGE,
  text: newText,
})
export const handleUserInfoModal = () => ({
  type: OPEN_USER_INFO_MODAL
})
export const setUserInfo = (userInfo) => ({
  type: SET_USER_INFO, userInfo
})

// thunk
export const getUserInfo = (userId) => {
  return (dispatch) => {
    settingsAPI.getUserInfo(userId).then((response) => {
      dispatch(setUserInfo(response.data))
    })
  }
}

export default dialogsReducer
