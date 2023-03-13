import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Popover } from "@mantine/core";
import { Badge, Button, IconButton } from "@mui/material/";
import NavItem from "../NavItem";
import MenuItems from "../MenuItems";
import { BtnLogout, Menu } from "./style";
import { selectAllProducts } from "../../store/Products/products.reducer";
import { selectUserLogado } from "../../store/Users/users.reducer";
import ModalCheckLogout from "../ModalCheckLogout";
import { ImExit } from "react-icons/im";

const index = () => {
  const [isActive, setIsActive] = useState(false);

  const [OpenModal, setOpenModal] = useState(false);

  const OpenMenu = () => setIsActive(true);
  const CloseMenu = () => setIsActive(false);

  const Products = useSelector(selectAllProducts);
  const user = useSelector(selectUserLogado);

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
        {user && (
          <div>
            <div className="btns">
              <IconButton>
                <Badge
                  badgeContent={Products.length === 0 ? "0" : Products.length}
                  color="primary"
                >
                  <FaShoppingCart />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge
                  badgeContent={Products.length === 0 ? "0" : Products.length}
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
                  onClick={() => setOpenModal(true)}
                  fullWidth
                >
                  Terminar sessão
                </BtnLogout>
              </Popover.Dropdown>
            </Popover>
          </div>
        )}
      </Menu>
      {OpenModal && (
        <ModalCheckLogout
          open={OpenModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default index;
