import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuItems = () => {
  const itemAtivo = useLocation().pathname.substring(1);

  return (
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
  );
};

export default MenuItems;
