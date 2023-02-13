import React, { useState } from "react";
import NavItem from "../NavItem";
import { IconButton } from "@mui/material/";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from "./style";
import { Link, useLocation } from "react-router-dom";

const index = () => {
  const itemAtivo = useLocation().pathname.substring(1);

  const [isActive, setIsActive] = useState(false);

  const OpenMenu = () => setIsActive(true);
  const CloseMenu = () => setIsActive(false);

  return (
    <>
      <NavItem isAtive={isActive} CloseMenu={CloseMenu} />
      <Menu>
        <h1>
          <img src="./assets/Images/logo.png" alt="Sapunga" />
        </h1>
        <IconButton onClick={OpenMenu}>
          <GiHamburgerMenu />
        </IconButton>
        <ul>
          <li className={itemAtivo === "" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={itemAtivo === "quem_somos" ? "active" : ""}>
            <Link to="/quem_somos">Quem somos?</Link>
          </li>
          <li className={itemAtivo === "produtos" ? "active" : ""}>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li className={itemAtivo === "servicos" ? "active" : ""}>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li className={itemAtivo === "contactos" ? "active" : ""}>
            <Link to="/contactos">Contacto</Link>
          </li>
        </ul>
      </Menu>
    </>
  );
};

export default index;
