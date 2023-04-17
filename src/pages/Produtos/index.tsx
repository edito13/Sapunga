import React, { useEffect } from "react";
import AOS from "aos";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { SwiperProps, SwiperSlide } from "swiper/react";
import Header from "../../Components/Header";
import ProductItem from "../../Components/ProductItem";
import TitlePages from "../../Components/TitlePages";
import Slider from "../../Components/Slider";
import Footer from "../../Components/Footer";
import { selectAllProductsCategory } from "../../store/Products/products.reducer";
import ToTop from "../../Components/ToTop";
import { ProductsContainer } from "./style";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Products = useSelector(selectAllProductsCategory);

  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 4,
    navigation: true,
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
      <ProductsContainer>
        {Products.map((item, index) => (
          <div className="Slider_products">
            <h1 data-aos="fade-right">{item._id}</h1>
            <Slider settings={settings}>
              {item.products.map((product) => (
                <SwiperSlide key={item._id}>
                  <ProductItem
                    key={index}
                    product={product}
                    index={index + 1}
                  />
                </SwiperSlide>
              ))}
            </Slider>
          </div>
        ))}
      </ProductsContainer>
      <Footer />
    </>
  );
};

export default index;
