import { useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "./assets/api";
import Routes from "./Routes";
import { adicionarUsuarios } from "./store/Users/users.reducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      const users = await api.GetUsers();

      if (users) {
        dispatch(adicionarUsuarios(users));
        localStorage.setItem("estado", JSON.stringify(users));
        console.log(users);
        console.log("Feitooo");
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
