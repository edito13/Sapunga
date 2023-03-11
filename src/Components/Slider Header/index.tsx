import React, { ReactNode } from "react";
import { SwiperProps } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { CarrosselContainer } from "./style";

interface Props {
  settings: SwiperProps;
  children: ReactNode;
}

const slider: React.FC<Props> = ({ settings, children }) => {
  return (
    <CarrosselContainer modules={[Pagination, Autoplay]} {...settings}>
      {children}
    </CarrosselContainer>
  );
};

export default slider;
