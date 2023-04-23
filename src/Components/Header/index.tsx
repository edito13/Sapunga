import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { Header } from "./style";
import Menu from "../Menu";
import Slider from "../Slider Header";
import ContentHeader from "../ContentHeader";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000,
    // },
  };

  return (
    <Header id="header">
      <Menu />
      <Slider settings={settings}>
        <SwiperSlide>
          <ContentHeader image={1} />
        </SwiperSlide>
        <SwiperSlide>
          <ContentHeader image={2} />
        </SwiperSlide>
        <SwiperSlide>
          <ContentHeader image={3} />
        </SwiperSlide>
      </Slider>
    </Header>
  );
};

export default index;
