import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import api from "./assets/api";
import Routes from "./Routes";
import { SignInAdmin } from "./store/Admins/admins.reducer";
import { addCategories } from "./store/Categories/categories.reducer";
import { addFavourites } from "./store/Favourites/favourites.reducer";
import { addOrders, addOrdersUser } from "./store/Orders/orders.reducer";
import {
  addProducts,
  addProductsCategory,
} from "./store/Products/products.reducer";
import { addUsers, SignUser } from "./store/Users/users.reducer";
import { UserType } from "./types";
import Login2 from "./pages/Login2";

const App = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["user", "admin"]);
  const token = cookies.user;
  const token_admin = cookies.admin;

  useEffect(() => {
    if (token) {
      const user = JSON.parse(localStorage.user);
      dispatch(SignUser({ user, token }));
    }
  }, []);

  useEffect(() => {
    if (token_admin) {
      const admin = JSON.parse(localStorage.admin);
      dispatch(SignInAdmin({ admin, token: token_admin }));
    }
  }, []);

  useEffect(() => {
    localStorage.removeItem("estado");

    const getUsers = async () => {
      const users = await api.SelectUsers();

      if (users) {
        dispatch(addUsers(users));
        localStorage.setItem("estado", JSON.stringify(users));
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    localStorage.removeItem("products");

    const getProducts = async () => {
      const products = await api.SelectProducts();

      if (products) {
        dispatch(addProducts(products));
        localStorage.setItem("products", JSON.stringify(products));
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    localStorage.removeItem("productsCategory");

    const getProductsCategory = async () => {
      const products = await api.SelectProductsCategory();

      if (products) {
        dispatch(addProductsCategory(products));
        localStorage.setItem("productsCategory", JSON.stringify(products));
      }
    };

    getProductsCategory();
  }, []);

  useEffect(() => {
    localStorage.removeItem("orders");

    const getOrders = async () => {
      const orders = await api.SelectOrders();

      if (orders) {
        dispatch(addOrders(orders));
        localStorage.setItem("orders", JSON.stringify(orders));
      }
    };

    getOrders();
  }, []);

  useEffect(() => {
    localStorage.removeItem("ordersUser");

    if (token) {
      const getOrdersUser = async () => {
        const ordersUser = await api.SelectOrdersUser(token);

        if (ordersUser) {
          dispatch(addOrdersUser(ordersUser));
          localStorage.setItem("ordersUser", JSON.stringify(ordersUser));
        }
      };

      getOrdersUser();
    }
  }, []);

  useEffect(() => {
    localStorage.removeItem("favourites");

    if (token) {
      const getFavourites = async () => {
        const favourites = await api.SelectFavourites(token);

        if (favourites) {
          dispatch(addFavourites(favourites));
          localStorage.setItem("favourites", JSON.stringify(favourites));
        }
      };

      getFavourites();
    }
  }, []);

  useEffect(() => {
    localStorage.removeItem("categories");

    const getCategories = async () => {
      const categories = await api.SelectCategories();

      if (categories) {
        dispatch(addCategories(categories));
        localStorage.setItem("categories", JSON.stringify(categories));
      }
    };

    getCategories();
  }, []);

  // const [User, setUser] = useState<UserType>();

  // const GetLoginUserData = (newData: UserType) => {
  //   if (newData) {
  //     const { displayName, photoURL, email } = newData;

  //     const newUser = {
  //       name: displayName,
  //       photoURL,
  //       email,
  //     };

  //     // setUser(newUser);
  //     console.log(newUser);
  //   }
  // };

  // if (!User) {
  //   return <Login2 onReceiveGoogle={GetLoginUserData} />;
  // }

  return <Routes />;
};

export default App;
