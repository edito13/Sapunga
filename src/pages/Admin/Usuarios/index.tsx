import React, { useEffect } from "react";
import AOS from "aos";
import { Table } from "@mantine/core";
import { FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Title } from "../style";
import { Container } from "./style";
import { UsersData } from "../../../interfaces";
import { selectUsers } from "../../../store/Users/users.reducer";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Painel Admin - Usuários";
  }, []);

  const Users: UsersData[] = useSelector(selectUsers);

  const rows = Users.map((user, index) => (
    <tr key={user._id}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.password?.substring(0, 10) + "..."}</td>
    </tr>
  ));

  return (
    <Container>
      <div className="Header">
        <Title data-aos="fade-right" data-aos-delay="100">
          <FaUsers />
          <h1>Usuarios</h1>
        </Title>
      </div>
      <Table
        data-aos="zoom-in-up"
        data-aos-delay="150"
        style={{ background: "#fdfdfd", borderRadius: "8px" }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Senha</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
};

export default index;
