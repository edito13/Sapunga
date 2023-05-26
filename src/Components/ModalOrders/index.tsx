import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import LoadingProgress from "../LoadingProgress";
import {
  selectOrdersUser,
  addOrders,
  addOrdersUser,
} from "../../store/Orders/orders.reducer";
import { Container, ImgProduct, MainModal } from "./style";
import { Money } from "../../assets/ConvertMoney";
import api, { BaseUrl } from "../../assets/api";
import { selectUserSigned } from "../../store/Users/users.reducer";
import { UsersData } from "../../interfaces";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

interface Props {
  open: boolean;
  onClose: () => void;
}

const index: React.FC<Props> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["user"]);
  const user: UsersData = useSelector(selectUserSigned);
  const ordersUser = useSelector(selectOrdersUser);
  const ordersTotal = useMemo(
    () =>
      Money(
        ordersUser.reduce((previousPrice, current) => {
          const currentPrice = current.product?.price as number;
          const currentQuatity = current.quantity;
          const totalProduct = currentPrice * currentQuatity;
          return previousPrice + totalProduct;
        }, 0)
      ),
    [ordersUser]
  );
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      1000
    );

    return () => clearInterval(time);
  }, [LoadingStatus]);

  useEffect(() => {
    if (LoadingCounter <= 2) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  const DeleteOrder = async (id: string) => {
    setLoadingStatus(true);
    const response = await api.DeleteOrder({ id, token: cookies.user });
    dispatch(addOrders(response));
    dispatch(addOrdersUser(response));
  };

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
              {ordersUser.length ? (
                ordersUser.map((order) => (
                  <div key={order._id}>
                    <div>
                      <ImgProduct
                        url={`${BaseUrl}${order.product?.urlPhoto}`}
                      />
                      <div>
                        <p>
                          {order.product?.name}({order.quantity})
                        </p>
                        <p>{Money(order.product?.price as number)}</p>
                      </div>
                    </div>
                    <IconButton onClick={() => DeleteOrder(order._id)}>
                      <ImBin />
                    </IconButton>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: "center" }}>
                  Nenhum produto foi encomendado ainda.
                </p>
              )}
            </div>
            {ordersUser.length ? (
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
              <span></span>
            )}
          </>
        )}
      </Container>
    </MainModal>
  );
};

export default index;
