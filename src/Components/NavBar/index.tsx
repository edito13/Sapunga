import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBriefcase, FaShoppingCart, FaUsers } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { Container, ListItem } from "./style";

const index = () => {
  const page = useLocation().pathname.split("/")[2];

  return (
    <Container>
      <img src="../assets/Images/logo ori.png" alt="Sapunga" />
      <nav>
        <ul>
          <li>
            <Link to={"/admin/dashboard"}>
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
            <Link to={"/admin/usuarios"}>
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
            <Link to={"/admin/produtos"}>
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
            <Link to={"/admin/encomendas"}>
              <ListItem
                className={page === "encomendas" ? "active" : ""}
                startIcon={<FaShoppingCart />}
                fullWidth
              >
                Pedidos
              </ListItem>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default index;
