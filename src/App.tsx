import { useState } from "react";
import { UserType } from "./types";
import Routes from "./Routes";
import Login2 from "./pages/Login2";

const App = () => {
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
