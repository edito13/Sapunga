import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Users/users.reducer";

const store = configureStore({
  reducer: {
    users: usersReducer
  }
});

export default store;
