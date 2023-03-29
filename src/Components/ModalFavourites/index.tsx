import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { ImBin } from "react-icons/im";
import LoadingProgress from "../LoadingProgress";
import { Container, ImgProduct, MainModal } from "./style";
import { Money } from "../../assets/ConvertMoney";
import api, { BaseUrl } from "../../assets/api";
import { selectUserSigned } from "../../store/Users/users.reducer";
import { FavouritesData, UsersData } from "../../interfaces";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import {
  addFavourites,
  addNewFavourite,
  selectAllFavourites,
} from "../../store/Favorites/favorites.reducer";
import { BsHeartFill } from "react-icons/bs";

interface Props {
  open: boolean;
  onClose: () => void;
}

const index: React.FC<Props> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["user"]);
  const user: UsersData = useSelector(selectUserSigned);
  const Favourites: FavouritesData[] = useSelector(selectAllFavourites);
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      1000
    );

    return () => clearInterval(time);
  }, [LoadingStatus]);

  useEffect(() => {
    if (LoadingCounter <= 3) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  const DeleteFavourite = async (id: string) => {
    const response = await api.DeleteFavourite({ id, token: cookies.user });
    dispatch(addNewFavourite(response));
    dispatch(addFavourites(response));
    setLoadingStatus(true);
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
                <BsHeartFill />
                <h1>Produtos Favoritados</h1>
              </div>
            </div>
            <div className="items">
              {Favourites.length ? (
                Favourites.map((favourite) => (
                  <div key={favourite._id}>
                    <div>
                      <ImgProduct
                        url={`${BaseUrl}${favourite.product?.urlPhoto}`}
                      />
                      <div>
                        <p>{favourite.product?.name}</p>
                        <p>{Money(favourite.product?.price as number)}</p>
                      </div>
                    </div>
                    <IconButton onClick={() => DeleteFavourite(favourite._id)}>
                      <ImBin />
                    </IconButton>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: "center" }}>
                  Nenhum produto foi favoritado ainda.
                </p>
              )}
            </div>
            <span></span>
          </>
        )}
      </Container>
    </MainModal>
  );
};

export default index;
