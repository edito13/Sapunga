import React, { useState } from 'react'
import { IconButton } from '@mui/material/'
import { BsXLg } from "react-icons/bs"
import { MobileMenu } from './style'

interface props{
  CloseMenu: () => void;
  isAtive: boolean;
}

const index = ({ CloseMenu, isAtive }: props) => {

  return (
    <MobileMenu className={`${isAtive && 'ative'}`}>
        <IconButton onClick={CloseMenu}><BsXLg /></IconButton>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Quem somos?</a></li>
          <li><a href="">Produtos</a></li>
          <li><a href="">Serviços</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
    </MobileMenu>
  )
}

export default index