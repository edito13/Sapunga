import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Users/users.reducer";
import productsReducer from "./Products/products.reducer";
import ordersReducer from "./Orders/orders.reducer";
import favoritesReducer from "./Favourites/favourites.reducer";
import categoriesReducer from "./Categories/categories.reducer";
import adminsReducer from "./Admins/admins.reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    orders: ordersReducer,
    favourites: favoritesReducer,
    categories: categoriesReducer,
    admins: adminsReducer,
  },
});

export default store;
