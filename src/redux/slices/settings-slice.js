import { createSlice } from "@reduxjs/toolkit";
import { settingsAPI } from "../../api/api";

export const initialState = {
  profile: null,
  status: ""
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setProfile(state, action) {
      state.profile = action.payload;
    },
    savePhoto(state, action) {
      state.profile.photos = action.payload
    }
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

export const getProfile = (userId) => async (dispatch) => {
  const response = await settingsAPI.getUserInfo(userId);
  if (response.status === 200) {
    dispatch(setProfile(response.data));
  }
};

export const setPhoto = (file) => async (dispatch) => {
  const response = await settingsAPI.savePhoto(file);

  console.log(response);
  if (response.data.resultCode === 0) {
    dispatch(savePhoto(response.data.data.photos));
  }
};

export const { setStatus, setProfile, savePhoto } = settingsSlice.actions;
export default settingsSlice.reducer;
