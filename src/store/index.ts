import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Users/users.reducer";
import productsReducer from "./Products/products.reducer";
import ordersReducer from "./Orders/orders.reducer";
import favoritesReducer from "./Favorites/favorites.reducer";
import categoriesReducer from "./Categories/categories.reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    orders: ordersReducer,
    favourites: favoritesReducer,
    categories: categoriesReducer,
  },
});

export default store;
