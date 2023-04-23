import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
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
import {
  addUsers,
  IsAuthenticed,
  SignUser,
  TokenUser,
} from "./store/Users/users.reducer";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticed = useSelector(IsAuthenticed);
  const Token = useSelector(TokenUser);
  const [cookies] = useCookies(["user", "admin"]);
  const token = cookies.user;
  const token_admin = cookies.admin;

  const userToken = token || Token;

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

    if (userToken) {
      const getOrdersUser = async () => {
        const ordersUser = await api.SelectOrdersUser(userToken);

        if (ordersUser) {
          dispatch(addOrdersUser(ordersUser));
          localStorage.setItem("ordersUser", JSON.stringify(ordersUser));
        }
      };

      getOrdersUser();
    }
  }, [isAuthenticed]);

  useEffect(() => {
    localStorage.removeItem("favourites");

    if (userToken) {
      const getFavourites = async () => {
        const favourites = await api.SelectFavourites(userToken);

        if (favourites) {
          dispatch(addFavourites(favourites));
          localStorage.setItem("favourites", JSON.stringify(favourites));
        }
      };

      getFavourites();
    }
  }, [isAuthenticed]);

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

  return <Routes />;
};

export default App;
