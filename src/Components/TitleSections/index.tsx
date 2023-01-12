import React from 'react'
import { TitleContainer } from './style';

interface props{
    children: string;
}

const index: React.FC<props> = ({ children }) => {
  return (
    <TitleContainer>
        <h2>{children}</h2>
    </TitleContainer>
  )
}

export default index