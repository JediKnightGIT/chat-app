// import { callSubscriber } from "../index"

import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

// let callSubscriber = () => {
//   console.log('State changed');
// }

let store = {
  _state: {
    messagesPage: {
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
      newMessage: ''
    },
    profilePage: {
      posts: [
        { id: 1, message: 'My new test message.', likes: 9 },
        { id: 2, message: 'Buy eggs tomorrow!', likes: 6 },
      ],
      newPostText: 'Jedi'
    },
    contactsPage: {
      contacts: [
        {id: 1, name: 'Patrick Bateman', username: 'PBateman'},
        {id: 2, name: 'Ben Shapiro', username: 'BShapiro'},
        {id: 3, name: 'Tom Hardy', username: 'THardy'}
      ]
    }
  },
  _callSubscriber: () => {
    console.log('State changed');
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  // addPost() {
  //   const message = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likes: 0
  //   }
  
  //   this._state.profilePage.posts.push(message)
  //   this._state.profilePage.newPostText = ''
  //   this._callSubscriber(this._state)
  // },
  // updatePost(text) {    
  //   this._state.profilePage.newPostText = text
  //   this._callSubscriber(this._state)
  // },
  // sendNewMessage() {
  //   const message = {
  //     id: 6,
  //     text: this._state.messagesPage.newMessage,
  //     date: `${new Date().getHours()}:${new Date().getMinutes()}`,
  //     role: 'recepient',
  //   }
  
  //   this._state.messagesPage.messages.push(message)
  //   this._state.messagesPage.newMessage = ''
  //   this._callSubscriber(this._state)
  // },
  // updateNewMessage(text) {
  //   this._state.messagesPage.newMessage = text
  //   this._callSubscriber(this._state)
  // },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

    this._callSubscriber(this._state)
  }
}

window.store = store

export default store
