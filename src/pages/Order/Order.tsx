import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { SwiperProps, SwiperSlide } from "swiper/react";
import Slider from "../../Components/Slider Order";
import { ProductsData } from "../../interfaces";
import { selectAllProducts } from "../../store/Products/products.reducer";
import { Container, ContainerProduct } from "./style";

interface Props {}

export default ({}: Props) => {
  const { id } = useParams();
  const Products: ProductsData[] = useSelector(selectAllProducts);
  const [Product, setProduct] = useState<ProductsData>();

  useEffect(() => {
    const product = Products.filter((product) => product._id === id)[0];
    setProduct(product);
  }, [id]);

  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 1300,
    },
    loop: true,
  };

  return (
    <Container>
      <div className="introduce">
        <Slider settings={settings}>
          <SwiperSlide>
            <img src="../assets/Images/buy1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../assets/Images/buy2.png" alt="" />
          </SwiperSlide>
        </Slider>
        <h1>Hello World: {Product?.name}</h1>
      </div>
      <ContainerProduct></ContainerProduct>
    </Container>
  );
};
