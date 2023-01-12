import React, { useState } from 'react'
import NavItem from '../NavItem'
import { IconButton } from '@mui/material/'
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from './style';

const index = () => {

  const [isActive, setIsActive] = useState(false);
  
  const OpenMenu = () => setIsActive(true)
  const CloseMenu = () => setIsActive(false)

  return (
    <>
      <NavItem isAtive={isActive} CloseMenu={CloseMenu}/>
      <Menu>
        <h1><img src="./assets/Images/SAPUNGA LOGO.png" alt="Sapunga" /></h1>
        <IconButton onClick={OpenMenu}>
          <GiHamburgerMenu />
        </IconButton>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Quem somos?</a></li>
          <li><a href="">Produtos</a></li>
          <li><a href="">Serviços</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
      </Menu>
    </>
  )
}

export default index