import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./Favorites/favorites.reducer";
import ordersReducer from "./Orders/orders.reducer";
import productsReducer from "./Products/products.reducer";
import usersReducer from "./Users/users.reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    orders: ordersReducer,
    favourites: favoritesReducer,
  },
});

export default store;
