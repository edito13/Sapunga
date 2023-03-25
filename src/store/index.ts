import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./Orders/orders.reducer";
import productsReducer from "./Products/products.reducer";
import usersReducer from "./Users/users.reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    orders: ordersReducer,
  },
});

export default store;
