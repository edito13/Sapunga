import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "./style";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import api from "../../../assets/api";

interface UsersData {
  _id: string;
  name: string;
  email: string;
}

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [Users, setUsers] = useState<UsersData[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await api.GetUsers();

      setUsers(users);
    };

    getUsers();
  }, []);

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
        <div className="statistic-item" data-aos="zoom-in" data-aos-delay="100">
          <div className="title">
            <FaUsers />
            <p>Usuarios</p>
          </div>
          <span>{Users.length}</span>
        </div>
        <div className="statistic-item" data-aos="zoom-in" data-aos-delay="200">
          <div className="title">
            <BsBagFill />
            <p>Produtos</p>
          </div>
          <span>09</span>
        </div>
        <div className="statistic-item" data-aos="zoom-in" data-aos-delay="300">
          <div className="title">
            <FaShoppingCart />
            <p>Encomendas</p>
          </div>
          <span>20</span>
        </div>
        <div className="statistic-item" data-aos="zoom-in" data-aos-delay="400">
          <div className="title">
            <FaUsers />
            <p>Usuarios</p>
          </div>
          <span>900</span>
        </div>
      </div>
    </Container>
  );
};

export default index;
