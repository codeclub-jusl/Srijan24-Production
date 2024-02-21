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
      console.log('before cookies set')
      document.cookie = `x-srijan-firebase-auth-token=${action.payload.authTokenID}`
      document.cookie = `x-srijan-firebase-user-email=${action.payload.email}`
      console.log(action.payload)
      console.log('after cookies set')
    },

    logoutUser: (state, action) => {
      state.user = null;
      console.log('before cookie removal')
      deleteCookie('x-srijan-firebase-auth-token')
      deleteCookie('x-srijan-firebase-user-email')
      console.log('after cookie removal')

    },
  },
});

export const {loginUser, logoutUser} = userSlice.actions;
