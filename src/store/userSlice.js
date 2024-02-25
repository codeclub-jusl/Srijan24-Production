import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: null,
};


const getCookie = (name) => {
  return document.cookie.split(';').some(c => {
    return c.trim().startsWith(name + '=');
  });
}

const deleteCookie = (name, path, domain) => {
  if(getCookie(name)) {
    document.cookie = name + "=" +
      ((path) ? ";path=" + path : "") +
      ((domain) ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      document.cookie = `x-srijan-firebase-auth-token=${action.payload.authTokenID}; max-age=86400`
      document.cookie = `x-srijan-firebase-user-email=${action.payload.email}; max-age=86400`
    },

    logoutUser: (state, action) => {
      deleteCookie('x-srijan-firebase-auth-token')
      deleteCookie('x-srijan-firebase-user-email')
      state.user = null;
    },

    refreshUserToken: (state, action) => {
      state.user.authTokenID = action.payload
      // update the old cookie with the new token value
      document.cookie = `x-srijan-firebase-auth-token=${action.payload}; max-age=86400`
    },
  },
});

export const {loginUser, logoutUser, refreshUserToken} = userSlice.actions;
