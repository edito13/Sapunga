import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { BsBagFill, BsFillChatDotsFill } from "react-icons/bs";
import { Container } from "./style";
import { selectUsers } from "../../../store/Users/users.reducer";

interface UsersData {
  _id: string;
  name: string;
  email: string;
}

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Users: UsersData[] = useSelector(selectUsers)

  return (
    <Container>
      <div className="introduce">
        <img
          data-aos="zoom-in-right"
          data-aos-delay="150"
          src="../assets/Images/painel man.svg"
          alt="Black man"
        />
        <div data-aos="zoom-in-left" data-aos-delay="150" className="text">
          <h3>Olá Edito</h3>
          <p>Bem-vindo ao seu Painel Administrador</p>
        </div>
      </div>
      <div className="statistic-container">
        <Link to={"/admin/usuarios"} className="statistic-item" data-aos="zoom-in" data-aos-delay="100">
          <div className="title">
            <FaUsers />
            <p>Usuarios</p>
          </div>
          <span>{Users.length > 10 ? Users.length : "0"+Users.length}</span>
        </Link>
        <Link to={"/admin/produtos"} className="statistic-item" data-aos="zoom-in" data-aos-delay="200">
          <div className="title">
            <BsBagFill />
            <p>Produtos</p>
          </div>
          <span>09</span>
        </Link>
        <Link to={"/admin/encomendas"} className="statistic-item" data-aos="zoom-in" data-aos-delay="300">
          <div className="title">
            <FaShoppingCart />
            <p>Encomendas</p>
          </div>
          <span>20</span>
        </Link>
        <Link to={"/admin/mensagens"} className="statistic-item" data-aos="zoom-in" data-aos-delay="400">
          <div className="title">
            <BsFillChatDotsFill />
            <p>Mensagens</p>
          </div>
          <span>04</span>
        </Link>
      </div>
    </Container>
  );
};

export default index;
