import React from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { UserType } from "../../types";
import { Container } from "./style";
import api from "../../assets/Firebase";

interface Props {
  onReceiveGoogle: (newData: UserType) => void;
}

const index = ({ onReceiveGoogle }: Props) => {
  const actionLoginGoogle = async () => {
    const { user } = await api.GoogleLogar();

    if (user) {
      onReceiveGoogle(user);
    } else {
      alert("Error");
    }
  };

  return (
    <Container>
      <div onClick={actionLoginGoogle}>
        <BsGoogle /> Fazer Login com Google
      </div>
      <div>
        <BsFacebook /> Fazer Login com Facebook
      </div>
      <h1>Hello World</h1>
    </Container>
  );
};

export default index;
