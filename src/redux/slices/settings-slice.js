import { createSlice } from "@reduxjs/toolkit";
import { settingsAPI } from "../../api/api";

export const initialState = {
  status: "",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setStatus(state, action) {
      // return {
      //   ...state,
      //   status: action.payload,
      // };
      state.status = action.payload;
    },
  },
});

// thunks
export const getStatus = (userId) => async (dispatch) => {
  const response = await settingsAPI.getUserStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await settingsAPI.updateUserStatus(status);
  console.log(response);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const { setStatus } = settingsSlice.actions;
export default settingsSlice.reducer;
