import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import api from "./assets/api";
import Routes from "./Routes";
import { addFavourites } from "./store/Favorites/favorites.reducer";
import { addOrders, addOrdersUser } from "./store/Orders/orders.reducer";
import { addProducts } from "./store/Products/products.reducer";
import { addUsers, SignUser } from "./store/Users/users.reducer";

const App = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["user"]);
  const token = cookies.user;

  useEffect(() => {
    if (token) {
      const user = JSON.parse(localStorage.user);
      dispatch(SignUser({ user, token }));
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

    const getOrdersUser = async () => {
      const ordersUser = await api.SelectOrdersUser(token);

      if (ordersUser) {
        dispatch(addOrdersUser(ordersUser));
        localStorage.setItem("ordersUser", JSON.stringify(ordersUser));
      }
    };

    getOrdersUser();
  }, []);

  useEffect(() => {
    localStorage.removeItem("favourites");

    const getFavourites = async () => {
      const favourites = await api.SelectFavourites(token);

      if (favourites) {
        dispatch(addFavourites(favourites));
        localStorage.setItem("favourites", JSON.stringify(favourites));
      }
    };

    getFavourites();
  }, []);

  // const [User, setUser] = useState<UserType>();

  // const GetLoginUserData = (newData: UserType) => {
  //   if (newData) {
  //     const newUser = {
  //       uid: newData.uid,
  //       displayName: newData.displayName,
  //       photoURL: newData.photoURL,
  //     };

  //     setUser(newUser);
  //     console.log(newUser);
  //   }
  // };

  // if (!User) {
  //   return <Login2 onReceiveGoogle={GetLoginUserData} />;
  // }

  return <Routes />;
};

export default App;
