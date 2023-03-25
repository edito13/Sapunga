import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import LoadingProgress from "../LoadingProgress";
import { selectOrdersUser } from "../../store/Orders/orders.reducer";
import { Container, ImgProduct, MainModal } from "./style";
import { Money } from "../../assets/ConvertMoney";
import { BaseUrl } from "../../assets/api";

interface Props {
  open: boolean;
  onClose: () => void;
}

const index: React.FC<Props> = ({ open, onClose }) => {
  const ordersUser = useSelector(selectOrdersUser);
  const ordersTotal = useMemo(
    () =>
      Money(
        ordersUser.reduce((previousPrice, current) => {
          const currentPrice = current.product?.price as number;
          return previousPrice + currentPrice;
        }, 0)
      ),
    [ordersUser]
  );
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      1000
    );

    return () => clearInterval(time);
  }, [LoadingCounter]);

  useEffect(() => {
    if (LoadingCounter <= 3) setLoadingStatus(false);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  return (
    <MainModal open={open} onClose={onClose}>
      <Container>
        {LoadingStatus ? (
          <LoadingProgress />
        ) : (
          <>
            <div className="title">
              <div>
                <FaShoppingCart />
                <h1>Carrinho de Encomendas</h1>
              </div>
            </div>
            <div className="items">
              {ordersUser ? (
                ordersUser.map((order) => (
                  <div key={order._id}>
                    <div>
                      <ImgProduct
                        url={`${BaseUrl}${order.product?.urlPhoto}`}
                      />
                      <div>
                        <p>{order.product?.name}</p>
                        <p>{Money(order.product?.price as number)}</p>
                      </div>
                    </div>
                    <IconButton>
                      <ImBin />
                    </IconButton>
                  </div>
                ))
              ) : (
                <p>Nenhum produto foi encomendado ainda.</p>
              )}
            </div>
            {ordersUser ? (
              <footer>
                <div className="total">
                  <p>Total:</p>
                  <p>{ordersTotal}</p>
                </div>
                <p>
                  {ordersUser.length} Ite{ordersUser.length > 1 ? "ns" : "m"}
                </p>
              </footer>
            ) : (
              ""
            )}
          </>
        )}
      </Container>
    </MainModal>
  );
};

export default index;
