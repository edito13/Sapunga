import React, { useState } from 'react'
import { IconButton } from '@mui/material/'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp, BsXLg } from "react-icons/bs"
import { MobileMenu } from './style'

interface props{
  CloseMenu: () => void;
  isAtive: boolean;
}

const index = ({ CloseMenu, isAtive }: props) => {

  return (
    <MobileMenu className={`${true && 'ative'}`}>
        <IconButton onClick={CloseMenu}><BsXLg /></IconButton>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Quem somos?</a></li>
          <li><a href="">Produtos</a></li>
          <li><a href="">Serviços</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
        <div>
          <div>
            <BsFacebook />
          </div>
          <div>
            <BsInstagram />
          </div>
          <div>
            <BsWhatsapp />
          </div>
          <div>
            <BsTwitter />
          </div>
        </div>
    </MobileMenu>
  )
}

export default index