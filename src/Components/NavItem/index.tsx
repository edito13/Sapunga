import React, { useState } from "react";
import { IconButton } from "@mui/material/";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsXLg,
} from "react-icons/bs";
import { MobileMenu } from "./style";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaUserLock } from "react-icons/fa";

interface props {
  CloseMenu: () => void;
  isAtive: boolean;
}

const index = ({ CloseMenu, isAtive }: props) => {
  const itemAtivo = useLocation().pathname.substring(1);

  return (
    <MobileMenu className={`${isAtive && "ative"}`}>
      <IconButton onClick={CloseMenu}>
        <BsXLg />
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
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
      <div>
        <div>
          <Link to={"/login"}>
            <div>
              <FaUserLock />
            </div>
            <p>Logar</p>
          </Link>
          <Link to={"/criar_conta"}>
            <div>
              <FaUserCircle />
            </div>
            <p>Cadastrar</p>
          </Link>
        </div>
        <div className="social-media">
          <div>
            <BsFacebook />
          </div>
          <div>
            <BsInstagram />
          </div>
          <div>
            <BsWhatsapp />
          </div>
          <div>
            <BsTwitter />
          </div>
        </div>
      </div>
    </MobileMenu>
  );
};

export default index;
