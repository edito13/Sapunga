import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Badge, IconButton } from "@mui/material/";
import NavItem from "../NavItem";
import { Menu } from "./style";
import { BsHeartFill } from "react-icons/bs";
import { selectAllProducts } from "../../store/Products/products.reducer";
import MenuItems from "../MenuItems";

const index = () => {
  const [isActive, setIsActive] = useState(false);

  const OpenMenu = () => setIsActive(true);
  const CloseMenu = () => setIsActive(false);

  const Products = useSelector(selectAllProducts);

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
        <div>
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
      </Menu>
    </>
  );
};

export default index;
