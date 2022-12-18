import { createSlice } from "@reduxjs/toolkit";
import { settingsAPI } from "../../api/api";

const initialState = {
  dialogs: [
    {
      id: 1,
      name: "Adam Jensen",
      username: "AJensen",
      message: "I never asked for this...",
    },
    {
      id: 2,
      name: "Bob Page",
      username: "PBob",
      message: "I never asked for this...",
    },
    {
      id: 3,
      name: "David Sarif",
      username: "DSarif",
      message: "I never asked for this...",
    },
    {
      id: 4,
      name: "Lucius de Beers",
      username: "LBeers",
      message: "I'm cold...",
    },
    {
      id: 5,
      name: "Miller",
      username: "Miller",
      message: "I never asked for this...",
    },
  ],
  messages: [
    { id: 1, text: "Hello!", date: "18:09", role: "sender" },
    { id: 2, text: "What's good, my friend?", date: "18:10", role: "sender" },
    {
      id: 3,
      text: "I'm feeling fabulous today. What about you?",
      date: "18:20",
      role: "recepient",
    },
    {
      id: 4,
      text: "I've been better, but it's okay nonetheless.",
      date: "18:22",
      role: "sender",
    },
    {
      id: 5,
      text: "Everybody has it sometimes",
      date: "18:34",
      role: "recepient",
    },
  ],
  userInfo: null,
};

const dialogsSlice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    sendNewMessage(state, action) {
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const message = {
        id: 6,
        text: action.payload,
        date: `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`,
        role: "recepient",
      };
      // return {
      //   ...state,
      //   messages: [...state.messages, message]
      // }
      state.messages.push(message);
    },
    deleteMessage(state, action) {
      state.messages = state.messages.filter(
        (message) => message.id !== action.payload
      );
    },
    setUserInfo(state, action) {
      // return {
      //   ...state,
      //   userInfo: action.userInfo
      // }
      state.userInfo = action.payload;
    },
  },
});

// thunk
export const getUserInfo = (userId) => async (dispatch) => {
  const response = await settingsAPI.getUserInfo(userId);
  dispatch(setUserInfo(response.data));
};
// export const getUserInfo = (userId) => (dispatch) => {
//     settingsAPI.getUserInfo(userId).then((response) => {
//       dispatch(setUserInfo(response.data))
//     })
// }

export const { sendNewMessage, deleteMessage, setUserInfo } =
  dialogsSlice.actions;
export default dialogsSlice.reducer;
