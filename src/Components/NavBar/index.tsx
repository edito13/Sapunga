import React from "react";
import { Link } from "react-router-dom";
import { FaDashcube, FaShoppingCart, FaUsers } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { Container, ListItem } from "./style";

const index = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to={"/admin/dashboard"}>
              <ListItem startIcon={<FaDashcube />} fullWidth>
                Dashboard
              </ListItem>
            </Link>
          </li>
          <li>
            <Link to={"/admin/usuarios"}>
              <ListItem startIcon={<FaUsers />} fullWidth>
                Usuarios
              </ListItem>
            </Link>
          </li>
          <li>
            <Link to={"/admin/produtos"}>
              <ListItem startIcon={<BsBagFill />} fullWidth>
                Produtos
              </ListItem>
            </Link>
          </li>
          <li>
            <Link to={"/admin/encomendas"}>
              <ListItem startIcon={<FaShoppingCart />} fullWidth>
                Encomendas
              </ListItem>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default index;
