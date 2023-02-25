import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import api from "./assets/api";
import Routes from "./Routes";
import { adicionarUsuarios, logarUsuario } from "./store/Users/users.reducer";

const App = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["user"]);

  useEffect(() => {
    const token = cookies.user;
    if (token) {
      const user = JSON.parse(localStorage.user);
      dispatch(logarUsuario({ user, token }));
    }
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const users = await api.GetUsers();

      if (users) {
        dispatch(adicionarUsuarios(users));
        localStorage.setItem("estado", JSON.stringify(users));
      }
    };

    getUsers();
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
