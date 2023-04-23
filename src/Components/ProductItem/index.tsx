import React, { useCallback, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IconButton } from "@mui/material";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { ButtonOrder, Container, Imagem } from "./style";
import { ProductsData, UsersData } from "../../interfaces";
import api, { BaseUrl } from "../../assets/api";
import { Money } from "../../assets/ConvertMoney";
import ModalLoading from "../ModalLoading";
import { useSelector } from "react-redux";
import {
  addFavourites,
  selectAllFavourites,
} from "../../store/Favourites/favourites.reducer";
import { selectUserSigned } from "../../store/Users/users.reducer";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { NodeEnvironment } from "../../types";

interface Props {
  index: number;
  product: ProductsData;
}

const index: React.FC<Props> = ({ index, product }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [cookies] = useCookies(["user"]);
  const user: UsersData = useSelector(selectUserSigned);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const env = process.env.NODE_ENV as NodeEnvironment;
  const [OpenModal, setOpenModal] = useState(false);
  const IsProductFavourite = useSelector(selectAllFavourites).filter(
    (favourite) => {
      if (user) {
        return (
          favourite.user?._id === user._id &&
          favourite.product?._id === product._id
        );
      }
    }
  );

  const token = cookies.user;

  const CloseModal = useCallback(() => {
    setOpenModal(false);
    navigate("/encomendar/" + product._id);
  }, [OpenModal]);

  const FavouriteProduct = async (productID: string) => {
    const response = await api.FavouriteProduct({
      token,
      productID,
    });

    dispatch(addFavourites(response));
  };

  const DesFavouriteProduct = async (id: string) => {
    const response = await api.DeleteFavourite({ token, id });

    dispatch(addFavourites(response));
  };

  return (
    <>
      <Container data-aos="zoom-in" data-aos-delay={`${(index + 1) * 100}`}>
        <Imagem
          data-aos="slide-down"
          src={
            env === "development"
              ? `${BaseUrl}${product.urlPhoto}`
              : `${product.urlPhoto}`
          }
        />
        <div>
          <p>{product.name}</p>
          <span>{Money(product.price)}</span>
        </div>
        <div className="btns">
          {IsProductFavourite.length ? (
            <IconButton
              data-aos="slide-right"
              onClick={() => DesFavouriteProduct(IsProductFavourite[0]._id)}
            >
              <FaHeart style={{ color: "red" }} />
            </IconButton>
          ) : (
            <IconButton
              data-aos="slide-right"
              onClick={() => FavouriteProduct(product._id)}
            >
              <FaHeart />
            </IconButton>
          )}
          <ButtonOrder
            variant="contained"
            startIcon={<FaShoppingCart />}
            onClick={() => setOpenModal(true)}
            data-aos="slide-left"
            disableElevation
          />
        </div>
      </Container>
      {OpenModal && <ModalLoading open={OpenModal} onClose={CloseModal} />}
    </>
  );
};

export default index;
