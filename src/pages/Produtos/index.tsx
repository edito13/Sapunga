import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { SwiperProps, SwiperSlide } from "swiper/react";
import Header from "../../Components/Header";
import ProductItem from "../../Components/ProductItem";
import TitlePages from "../../Components/TitlePages";
// import { ProductsContainer } from "./style";
import Slider from "../../Components/Slider";
import Footer from "../../Components/Footer";
import { selectAllProducts } from "../../store/Products/products.reducer";
import ToTop from "../../Components/ToTop";

const index = () => {
  const Products = useSelector(selectAllProducts);

  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: Products.length < 5 ? Products.length : 5,
    navigation: Products.length > 5,
    autoplay: {
      pauseOnMouseEnter: true,
      delay: 2000,
    },
  };

  return (
    <>
      <Header />
      <ToTop />
      <TitlePages Icon={<FaShoppingBag style={{ fontSize: "1.6em" }} />}>
        Produtos
      </TitlePages>
      <Slider settings={settings}>
        {Products.map((item, index) => (
          <SwiperSlide key={item._id}>
            <ProductItem key={index} product={item} index={index + 1} />
          </SwiperSlide>
        ))}
      </Slider>
      <Footer />
    </>
  );
};

export default index;
