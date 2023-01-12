import React, { ReactNode } from 'react'
import { VioletButton } from './style';

interface props{
  Icon?: ReactNode;
  children: string;
}

const index: React.FC<props> = ({ Icon, children }) => {
  return (
    <VioletButton variant='contained' startIcon={Icon} disableElevation>{children}</VioletButton>
  )
}

export default index