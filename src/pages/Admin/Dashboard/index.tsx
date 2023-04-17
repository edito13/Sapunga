import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "@mantine/core";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { OrdersData, ProductsData, UsersData } from "../../../interfaces";
import { Container } from "./style";
import { selectUsers } from "../../../store/Users/users.reducer";
import { selectAllProducts } from "../../../store/Products/products.reducer";
import { selectAllOrders } from "../../../store/Orders/orders.reducer";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Painel Admin - Dashboard";
  }, []);

  const Users: UsersData[] = useSelector(selectUsers);
  const Products: ProductsData[] = useSelector(selectAllProducts);
  const Orders: OrdersData[] = useSelector(selectAllOrders);

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
          <span>
            {Orders.length > 10 ? Orders.length : "0" + Orders.length}
          </span>
        </Link>
      </div>
      <div className="RecentUsers" data-aos="zoom-in-up" data-aos-delay="500">
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
