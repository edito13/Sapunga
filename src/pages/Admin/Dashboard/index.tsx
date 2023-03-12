import React, { useEffect } from "react";
import AOS from "aos";
import { Table } from "@mantine/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { BsBagFill, BsFillChatDotsFill } from "react-icons/bs";
import { ProductsData, UsersData } from "../../../interfaces";
import { Container } from "./style";
import { selectUsers } from "../../../store/Users/users.reducer";
import { selectAllProducts } from "../../../store/Products/products.reducer";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Users: UsersData[] = useSelector(selectUsers);
  const Products: ProductsData[] = useSelector(selectAllProducts);

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
      <div className="introduce">
        <img
          data-aos="zoom-in-right"
          data-aos-delay="150"
          src="../assets/Images/painel man.svg"
          alt="Black man"
        />
        <div data-aos="zoom-in-left" data-aos-delay="150" className="text">
          <h3>Sapunga</h3>
          <p>Bem-vindo ao seu Painel Administrador</p>
        </div>
      </div>
      <div className="statistic-container">
        <Link
          to={"/admin/usuarios"}
          className="statistic-item"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="title">
            <FaUsers />
            <p>Usuarios</p>
          </div>
          <span>{Users.length > 10 ? Users.length : "0" + Users.length}</span>
        </Link>
        <Link
          to={"/admin/produtos"}
          className="statistic-item"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="title">
            <BsBagFill />
            <p>Produtos</p>
          </div>
          <span>
            {Products.length > 10 ? Products.length : "0" + Products.length}
          </span>
        </Link>
        <Link
          to={"/admin/encomendas"}
          className="statistic-item"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="title">
            <FaShoppingCart />
            <p>Encomendas</p>
          </div>
          <span>20</span>
        </Link>
        <Link
          to={"/admin/mensagens"}
          className="statistic-item"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="title">
            <BsFillChatDotsFill />
            <p>Mensagens</p>
          </div>
          <span>04</span>
        </Link>
      </div>
      <div className="RecentUsers">
        <p>Recentes usuarios...</p>
        <Table style={{ background: "#fdfdfd", borderRadius: "8px" }}>
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
      </div>
    </Container>
  );
};

export default index;
