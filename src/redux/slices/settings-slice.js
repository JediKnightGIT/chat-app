import { createSlice } from "@reduxjs/toolkit";
import { settingsAPI } from "../../api/api";

export const initialState = {
  profile: null,
  status: "",
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
      state.profile.photos = action.payload;
    },
  },
});

// thunks
export const getStatus = (userId) => async (dispatch) => {
  const response = await settingsAPI.getUserStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status, setError) => async (dispatch) => {
  try {
    const response = await settingsAPI.updateUserStatus(status);

    const { fieldsErrors, resultCode, messages } = response.data;
    if (resultCode === 0) {
      dispatch(setStatus(status));
    } else {
      setFieldsError("status", messages, fieldsErrors, setError);
    }
  } catch (error) {
    console.error(error);
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

  if (response.data.resultCode === 0) {
    dispatch(savePhoto(response.data.data.photos));
  }
};

export const saveProfile =
  (profile, setError) => async (dispatch, getState) => {
    try {
      const userId = getState().auth.userId;
      const response = await settingsAPI.saveProfile(profile);

      const { fieldsErrors, resultCode, messages } = response.data;

      if (resultCode === 0) {
        dispatch(getProfile(userId));
      } else {
        setFieldsError("profile", messages, fieldsErrors, setError);
      }
    } catch (error) {
      console.error(error);
    }
  };

function setFieldsError(field, messages, fieldsErrors, setError) {
  if (fieldsErrors.length > 0) {
    for (let key in fieldsErrors) {
      let message = fieldsErrors[key].error;
      setError(fieldsErrors[key].field, { type: "server", message });
    }
  } else
    for (let key in messages) {
      let message = messages[key];
      setError(field, { type: "server", message });
    }
}

export const { setStatus, setProfile, savePhoto } = settingsSlice.actions;
export default settingsSlice.reducer;
