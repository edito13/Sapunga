import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBriefcase,
  FaCartPlus,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { BsBagFill, BsFillChatDotsFill } from "react-icons/bs";
import { Container, ListItem } from "./style";

const index = () => {
  const page = useLocation().pathname.split("/")[2];

  return (
    <Container>
      <img src="../assets/Images/logo ori.png" alt="Sapunga" />
      <nav>
        <ul>
          <li>
            <Link to={"dashboard"}>
              <ListItem
                className={page === "dashboard" ? "active" : ""}
                startIcon={<FaBriefcase />}
                fullWidth
              >
                Dashboard
              </ListItem>
            </Link>
          </li>
          <li>
            <Link to={"usuarios"}>
              <ListItem
                className={page === "usuarios" ? "active" : ""}
                startIcon={<FaUsers />}
                fullWidth
              >
                Usuarios
              </ListItem>
            </Link>
          </li>
          <li>
            <Link to={"produtos"}>
              <ListItem
                className={page === "produtos" ? "active" : ""}
                startIcon={<BsBagFill />}
                fullWidth
              >
                Produtos
              </ListItem>
            </Link>
          </li>
          <li>
            <Link to={"encomendas"}>
              <ListItem
                className={page === "encomendas" ? "active" : ""}
                startIcon={<FaCartPlus />}
                fullWidth
              >
                Encomendas
              </ListItem>
            </Link>
          </li>
          <li>
            <Link to={"mensagens"}>
              <ListItem
                className={page === "mensagens" ? "active" : ""}
                startIcon={<BsFillChatDotsFill />}
                fullWidth
              >
                Mensagens
              </ListItem>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default index;
