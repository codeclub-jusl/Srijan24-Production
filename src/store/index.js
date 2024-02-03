import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { userReducer: userSlice.reducer },
});
