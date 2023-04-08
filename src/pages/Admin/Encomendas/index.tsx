import React, { useEffect } from "react";
import AOS from "aos";
import { Table } from "@mantine/core";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { OrdersData } from "../../../interfaces";
import { selectAllOrders } from "../../../store/Orders/orders.reducer";
import { Title } from "../style";
import { Container } from "./style";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Painel Admin - Encomendas";
  }, []);

  const Orders: OrdersData[] = useSelector(selectAllOrders);

  const rows = Orders.map((order, index) => (
    <tr key={order._id}>
      <td>{index + 1}</td>
      <td>{order.product?.name}</td>
      <td>{order.user?.name}</td>
      <td>{order.user?.email}</td>
      <td>{order.quantity ?? 0}</td>
    </tr>
  ));

  return (
    <Container>
      <div className="Header">
        <Title data-aos="fade-right" data-aos-delay="100">
          <FaCartPlus />
          <h1>Encomendas</h1>
        </Title>
      </div>
      <Table
        data-aos="zoom-in-up"
        data-aos-delay="150"
        style={{ background: "#fdfdfd", borderRadius: "8px" }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome do produto</th>
            <th>Usuário</th>
            <th>Email</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
};

export default index;
