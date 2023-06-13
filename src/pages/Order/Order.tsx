import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { SwiperProps, SwiperSlide } from "swiper/react";
import api, { BaseUrl } from "../../assets/api";
import { Money } from "../../assets/ConvertMoney";
import Slider from "../../Components/Slider Order";
import { BlueButton } from "../../Components/BlueButton/style";
import ModalLoading from "../../Components/ModalLoading";
import { OrdersData, ProductsData, UsersData } from "../../interfaces";
import { selectAllProducts } from "../../store/Products/products.reducer";
import { Container, ContainerProduct, ImgProduct } from "./style";
import {
  addNewOrderUser,
  addOrders,
  addOrdersUser,
  selectOrdersUser,
} from "../../store/Orders/orders.reducer";
import { selectUserSigned } from "../../store/Users/users.reducer";
import { NodeEnvironment } from "../../types";
import PopoverContainer from "../../Components/PopoverComponent";

interface Props {}

export default ({}: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const env = process.env.NODE_ENV as NodeEnvironment;
  const user: UsersData = useSelector(selectUserSigned);
  const [cookies] = useCookies(["user"]);
  const Product: ProductsData = useSelector(selectAllProducts).filter(
    (product) => product._id === id
  )[0];

  const ordersUser = useSelector(selectOrdersUser);
  const dispatch = useDispatch();

  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 1500,
    },
    loop: true,
  };

  const [Quantity, setQuantity] = useState<number>(1);
  const [OpenModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);

  // Desactivar Popover
  const handleClosePop = () => setAnchorEl(false);

  const CloseModal = useCallback(() => {
    setOpenModal(false);
    setTimeout(() => navigate("/produtos"), 500);
  }, [OpenModal]);

  const OrderProduct = async () => {
    const token = cookies.user;

    const Order = ordersUser.filter(
      (order) =>
        order.product?._id === Product._id && order.user?._id === user._id
    );

    if (Order.length) {
      const response: OrdersData[] = await api.UpdateOrderProduct({
        id: Order[0]._id,
        token,
        quantity: Quantity,
      });

      dispatch(addOrders(response));
      dispatch(
        addOrdersUser(response.filter((order) => order.user?._id === user._id))
      );
      setTimeout(() => setOpenModal(true), 500);

      return true;
    } else {
      const response: OrdersData[] = await api.OrderProduct({
        productID: Product._id,
        quantity: Quantity,
        token,
      });

      dispatch(addOrders(response));
      dispatch(
        addOrdersUser(response.filter((order) => order.user?._id === user._id))
      );
      setTimeout(() => setOpenModal(true), 500);
    }
  };

  return (
    <>
      <Container>
        <div className="introduce">
          <img src="../assets/Images/logo.png" width={300} alt="" />
          <Slider settings={settings}>
            <SwiperSlide>
              <img src="../assets/Images/buy1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../assets/Images/buy2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../assets/Images/buy3.png" alt="" />
            </SwiperSlide>
          </Slider>
          <div className="pub">
            {ordersUser.length ? (
              <h1>Faça mais uma encomenda!</h1>
            ) : (
              <h1>Faça a sua primeira encomenda!</h1>
            )}
            <p>
              A sua felicidade sem dúvidas é o nosso maior objectivo, que tal
              fazer já a sua encomenda e ser feliz?
            </p>
            <p>
              Os teus produtos favoritos, estão todos aqui na{" "}
              <Link to={"/quem_somos"}>
                <span>SAPUNGA</span>
              </Link>
              .
            </p>
          </div>
        </div>
        <ContainerProduct>
          <ImgProduct
            src={
              env === "development"
                ? `${BaseUrl}${Product.urlPhoto}`
                : `${Product.urlPhoto}`
            }
          />
          <ul>
            <li>
              <p>Nome do produto:</p>
              <p>{Product.name}</p>
            </li>
            <li>
              <p>Preço do produto:</p>
              <p>{Money(Product.price)}</p>
            </li>
            <li>
              <p>Quantidade:</p>
              <form>
                <input
                  type="number"
                  value={Quantity}
                  onChange={(e) => setQuantity(+e.target.value)}
                />
              </form>
            </li>
          </ul>
          <footer>
            <div>
              <p style={{ fontWeight: "600" }}>Total:</p>
              <p>{Money(Product.price * Quantity)}</p>
            </div>
            <BlueButton onClick={OrderProduct} startIcon={<FaShoppingCart />}>
              Encomendar
            </BlueButton>
          </footer>
        </ContainerProduct>
        <PopoverContainer
          open={anchorEl}
          onClose={handleClosePop}
          msg="Encomenda feita com sucesso."
        />
      </Container>
      {OpenModal && <ModalLoading open={OpenModal} onClose={CloseModal} />}
    </>
  );
};
