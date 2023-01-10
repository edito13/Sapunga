import React, { useState } from 'react'
import NavItem from '../NavItem'

const index = () => {

  const [isActive, setIsActive] = useState(false); 
  
  const CloseMenu = () => setIsActive(false)

  return (
    <>
      <NavItem isAtive={isActive} CloseMenu={CloseMenu}/>
    </>
  )
}

export default index