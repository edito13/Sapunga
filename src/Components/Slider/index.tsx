import React, { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

interface Props {
  settings: SwiperProps;
  children: ReactNode;
}

const slider: React.FC<Props> = ({ settings, children }) => {
  return (
    <Swiper modules={[Navigation, Pagination, Autoplay]} {...settings}>
      {children}
    </Swiper>
  );
};

export default slider;
