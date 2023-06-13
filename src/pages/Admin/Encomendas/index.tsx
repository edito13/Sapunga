import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Table } from "@mantine/core";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { OrdersData } from "../../../interfaces";
import { selectAllOrders } from "../../../store/Orders/orders.reducer";
import { Title } from "../style";
import { Container } from "./style";
import LoadingProgress from "../../../Components/LoadingProgress";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Painel Admin - Encomendas";
  }, []);

  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      700
    );

    return () => clearInterval(time);
  }, [LoadingStatus]);

  useEffect(() => {
    if (LoadingCounter <= 1) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  const Orders: OrdersData[] = useSelector(selectAllOrders);

  const rows = Orders.map((order, index) => {
    const data = new Date(order.createdAt).toLocaleString();
    return (
      <tr key={order._id}>
        <td>{index + 1}</td>
        <td>{order.product?.name}</td>
        <td>{order.user?.name}</td>
        <td>{order.user?.email}</td>
        <td>{order.quantity ?? 0}</td>
        <td>{data}</td>
      </tr>
    );
  });

  return (
    <Container>
      <div className="Header">
        <Title data-aos="fade-right" data-aos-delay="100">
          <FaCartPlus />
          <h1>Encomendas</h1>
        </Title>
      </div>
      {LoadingStatus ? (
        <LoadingProgress />
      ) : (
        <>
          {Orders.length ? (
            <Table
              data-aos="zoom-in-up"
              data-aos-delay="150"
              style={{ background: "#fdfdfd", borderRadius: "8px" }}
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Produto</th>
                  <th>Usuário</th>
                  <th>Email</th>
                  <th>Quantidade</th>
                  <th>Data da Encomenda</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          ) : (
            <p>Nenhum item foi encomendado ainda.</p>
          )}
        </>
      )}
    </Container>
  );
};

export default index;
