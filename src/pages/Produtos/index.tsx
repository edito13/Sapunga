import React from "react";
import Header from "../../Components/Header";
import ProductItem from "../../Components/ProductItem";
import TitlePages from "../../Components/TitlePages";
import { FaShoppingBag } from "react-icons/fa";
// import { ProductsContainer } from "./style";
import Slider from "../../Components/Slider";
import Footer from "../../Components/Footer";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../store/Products/products.reducer";
import { SwiperProps, SwiperSlide } from "swiper/react";

const index = () => {
  const Products = useSelector(selectAllProducts);

  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: Products.length < 4 ? Products.length : 4,
    navigation: true,
    autoplay: {
      pauseOnMouseEnter: true,
      delay: 2000,
    },
  };

  return (
    <>
      <Header />
      <TitlePages Icon={<FaShoppingBag style={{ fontSize: "1.6em" }} />}>
        Produtos
      </TitlePages>
      <Slider settings={settings}>
        {Products.map((item, index) => (
          <SwiperSlide>
            <ProductItem key={index} product={item} index={index + 1} />
          </SwiperSlide>
        ))}
      </Slider>
      <Footer />
    </>
  );
};

export default index;
