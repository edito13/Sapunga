import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Popover } from "@mantine/core";
import { Badge, IconButton } from "@mui/material/";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import NavItem from "../NavItem";
import MenuItems from "../MenuItems";
import { BtnLogout, BtnSignin, Menu } from "./style";
import { selectUserSigned } from "../../store/Users/users.reducer";
import ModalCheckLogout from "../ModalCheckLogout";
import ModalOrders from "../ModalOrders";
import ModalFavourites from "../ModalFavourites";
import { selectOrdersUser } from "../../store/Orders/orders.reducer";
import { selectAllFavourites } from "../../store/Favourites/favourites.reducer";

const index = () => {
  const user = useSelector(selectUserSigned);
  const Favourites = useSelector(selectAllFavourites);
  const ordersUser = useSelector(selectOrdersUser);
  // console.log(ordersUser);
  const [isActive, setIsActive] = useState(false);
  const [OpenLogoutModal, setOpenLogoutModal] = useState(false);
  const [OpenOrderModal, setOpenOrderModal] = useState(false);
  const [OpenFavouriteModal, setOpenFavouriteModal] = useState(false);

  const OpenMenu = () => setIsActive(true);
  const CloseMenu = useCallback(() => setIsActive(false), [isActive]);
  const CloseLogoutModal = useCallback(
    () => setOpenLogoutModal(false),
    [OpenLogoutModal]
  );
  const CloseOrderModal = useCallback(
    () => setOpenOrderModal(false),
    [OpenOrderModal]
  );

  const CloseFavouriteModal = useCallback(
    () => setOpenFavouriteModal(false),
    [OpenFavouriteModal]
  );

  return (
    <>
      <NavItem isAtive={isActive} CloseMenu={CloseMenu} />
      <Menu>
        <h1>
          <img src="./assets/Images/logo.png" alt="Sapunga" />
        </h1>
        <IconButton onClick={OpenMenu}>
          <GiHamburgerMenu />
        </IconButton>
        <MenuItems />
        {user ? (
          <div>
            <div className="btns">
              <IconButton onClick={() => setOpenOrderModal(true)}>
                <Badge
                  badgeContent={
                    ordersUser.length === 0 ? "0" : ordersUser.length
                  }
                  color="primary"
                >
                  <FaShoppingCart />
                </Badge>
              </IconButton>
              <IconButton onClick={() => setOpenFavouriteModal(true)}>
                <Badge
                  badgeContent={
                    Favourites.length === 0 ? "0" : Favourites.length
                  }
                  color="primary"
                >
                  <BsHeartFill />
                </Badge>
              </IconButton>
            </div>
            <Popover trapFocus position="bottom" withArrow shadow="md">
              <Popover.Target>
                <p style={{ cursor: "pointer" }}>{user.name}</p>
              </Popover.Target>
              <Popover.Dropdown>
                <BtnLogout
                  startIcon={<ImExit />}
                  onClick={() => setOpenLogoutModal(true)}
                  fullWidth
                >
                  Terminar sessão
                </BtnLogout>
              </Popover.Dropdown>
            </Popover>
          </div>
        ) : (
          <Link to={"/login"}>
            <BtnSignin startIcon={<FaUserCircle />}>
              <span>Iniciar Sessão</span>
            </BtnSignin>
          </Link>
        )}
      </Menu>
      {OpenLogoutModal && (
        <ModalCheckLogout open={OpenLogoutModal} onClose={CloseLogoutModal} />
      )}
      {OpenOrderModal && (
        <ModalOrders open={OpenOrderModal} onClose={CloseOrderModal} />
      )}
      {OpenFavouriteModal && (
        <ModalFavourites
          open={OpenFavouriteModal}
          onClose={CloseFavouriteModal}
        />
      )}
    </>
  );
};

export default index;
