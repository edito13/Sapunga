import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Table } from "@mantine/core";
import { FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Title } from "../style";
import { Container } from "./style";
import { UsersData } from "../../../interfaces";
import { selectUsers } from "../../../store/Users/users.reducer";
import LoadingProgress from "../../../Components/LoadingProgress";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Painel Admin - Usuários";
  }, []);

  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      700
    );

    return () => clearInterval(time);
  }, [LoadingStatus]);

  useEffect(() => {
    if (LoadingCounter <= 1) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  const Users: UsersData[] = useSelector(selectUsers);

  const rows = Users.map((user, index) => {
    const data = new Date(user.createdAt).toLocaleString();
    return (
      <tr key={user._id}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>********</td>
        <td>{data}</td>
      </tr>
    );
  });

  return (
    <Container>
      <div className="Header">
        <Title data-aos="fade-right" data-aos-delay="100">
          <FaUsers />
          <h1>Usuarios</h1>
        </Title>
      </div>
      {LoadingStatus ? (
        <LoadingProgress />
      ) : (
        <>
          {Users.length ? (
            <Table
              data-aos="zoom-in-up"
              data-aos-delay="150"
              style={{ background: "#fdfdfd", borderRadius: "8px" }}
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome Completo</th>
                  <th>E-mail</th>
                  <th>Senha</th>
                  <th>Data de Cadastro</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          ) : (
            <p>Nenhum usuário cadastrou-se ainda.</p>
          )}
        </>
      )}
    </Container>
  );
};

export default index;
