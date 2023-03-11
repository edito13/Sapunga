import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  src: string;
}

export const CarrosselContainer = styled(Swiper)`
  &.swiper {
    padding: 0;
    width: 100%;
    height: 75vh;
  }

  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    margin-top: 20px;
    background: #000;
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
    opacity: 1;
  }
`;

export const CarrosselItem = styled(SwiperSlide)`
  && {
    width: 100%;
    height: 100%;

    & > div {
      width: 100%;
      height: 100%;
      background: url("${({ src }: Props) => src}") no-repeat;
      background-attachment: fixed;
      background-position: center;
      background-size: cover;

      div {
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, #000000af 80%, transparent);
      }
    }
  }
`;
