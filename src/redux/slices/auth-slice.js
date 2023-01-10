import { createSlice } from "@reduxjs/toolkit";
import { authAPI, securityAPI } from "../../api/api";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUserData(state, action) {
      state = action.payload;
      return state;
    },
    setCaptcha(state, action) {
      console.log(action);
      state.captcha = action.payload;
    },
  },
});

// thunks
export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    const payload = {
      userId: id,
      email,
      login,
      isAuth: true,
      captcha: "",
    };
    dispatch(setAuthUserData(payload));
  }
};

export const login =
  (email, password, rememberMe, captcha, setError) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);

    const { fieldsErrors, resultCode, messages } = response.data;

    const setFieldsError = () => {
      if (fieldsErrors.length > 0) {
        for (let key in fieldsErrors) {
          let message = fieldsErrors[key].error;
          setError(fieldsErrors[key].field, { type: "server", message });
        }
      } else
        for (let key in messages) {
          let message = messages[key];
          setError("credentials", { type: "server", message });
        }
    };

    switch (resultCode) {
      case 0:
        dispatch(getAuthUserData());
        break;
      case 1:
        setFieldsError();
        break;
      case 10:
        const response = await securityAPI.getCaptcha()
        dispatch(setCaptcha(response.data.url));
        setFieldsError();
        break;
      default:
        throw Error("Some error occured during Auth");
    }
  };

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    const payload = {
      userId: null,
      email: null,
      login: null,
      isAuth: false,
      captcha: ""
    }
    dispatch(setAuthUserData(payload));
  }
};

export const { setAuthUserData, setCaptcha } = authSlice.actions;
export default authSlice.reducer;
