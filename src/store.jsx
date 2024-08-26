import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./silces/UserSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    users: userReducer,
  },
});
