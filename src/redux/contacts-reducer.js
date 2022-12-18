import { usersAPI } from "../api/api"

const SET_CONTACTS = 'SET_CONTACTS'
const START_CONVERSATION = 'START_CONVERSATION'
const SHOW_MORE_CONTACTS = 'SHOW_MORE_CONTACTS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_CONTACTS_COUNT = 'SET_CONTACTS_COUNT'
const TOGGLE_IS_LOADED = 'TOGGLE_IS_LOADED'

const initialState = {
  contacts: [],
  pageSize: 5,
  contactsCount: 0,
  currentPage: 1,
  isLoaded: true
}

// contacts: [
//   {id: 1, name: 'Patrick Bateman', username: 'PBateman', photoURL: 'https://loremflickr.com/320/320', onlineStatus: 'online'},
//   {id: 2, name: 'Ben Shapiro', username: 'BShapiro', photoURL: 'https://loremflickr.com/320/320', onlineStatus: 'last seen 2 hours ago'},
//   {id: 3, name: 'Tom Hardy', username: 'THardy', photoURL: 'https://loremflickr.com/320/320', onlineStatus: 'last seen just now'}
// ]

// Reducer
const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      const mappedContacts = action.contacts.map((contact) => {
        return {
          id: contact.id,
          name: contact.name,
          photoURL: contact.photos.small
        }
      })
      return {
        // ...state, 
        // contacts: [...state.contacts, ...mappedContacts]
        ...state, contacts: mappedContacts
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }
    case SET_CONTACTS_COUNT:
      return {
        ...state, contactsCount: action.contactsCount
      }
    case TOGGLE_IS_LOADED:
      return {
        ...state, isLoaded: action.isLoaded
      }


    case START_CONVERSATION:
      return {

      }
    case SHOW_MORE_CONTACTS:
      return {

      }
    default:
      return state
  }
}

// Action creators
export const setContacts = (contacts) => ({ type: SET_CONTACTS, contacts})
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
export const setContactsCount = (contactsCount) => ({
  type: SET_CONTACTS_COUNT,
  contactsCount
})
export const setToggleIsLoaded = (isLoaded) => ({
  type: TOGGLE_IS_LOADED,
  isLoaded
})

export const sendMessage = (username) => ({ type: START_CONVERSATION, username })
export const updateMessage = (newText) => ({
  type: SHOW_MORE_CONTACTS,
  text: newText,
})

// Thunk
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage)) // pagination
    dispatch(setToggleIsLoaded(true))
    // const config = {
      //   headers: { Authorization: `Bearer yFQLZh4CWo8s0ILoRlpn` },
      // }
      // axios.get('https://the-one-api.dev/v2/character', config)
      
      usersAPI.getUsers(currentPage, pageSize).then((data) => {
        // console.log(response.data.docs)
        dispatch(setToggleIsLoaded(false))
        dispatch(setContacts(data.items))
        dispatch(setContactsCount(data.totalCount))
    })
  }
}



export default contactsReducer