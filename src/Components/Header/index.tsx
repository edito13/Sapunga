import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { Header } from "./style";
import BlueButton from "../BlueButton";
import { SwiperProps } from "swiper/react";
import Slider from "../../Components/Slider Header";
import CarrosselItem from "../CarrosselItem";

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
    autoplay: {
      delay: 3000,
    },
  };

  return (
    <Header>
      <Menu />
      {/* <main>
        <div>
          <h1 data-aos="zoom-in-down">SAPUNGA</h1>
          <p data-aos="zoom-in-down" data-aos-delay="150">
            Comércio & Serviços, Lda.
          </p>
          <div data-aos="zoom-in-down" data-aos-delay="250">
            <Link to={"/quem_somos"}>
              <BlueButton Icon={<FaUsers style={{ fontSize: "1.3em" }} />}>
                Quem somos?
              </BlueButton>
            </Link>
          </div>
        </div>
      </main> */}
      <Slider settings={settings}>
        <CarrosselItem image={1} />
        <CarrosselItem image={2} />
        <CarrosselItem image={4} />
      </Slider>
    </Header>
  );
};

export default index;
