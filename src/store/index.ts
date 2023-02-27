import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Products/products.reducer";
import usersReducer from "./Users/users.reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer
  }
});

export default store;
