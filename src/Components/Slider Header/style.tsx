import styled from "styled-components";
import { Swiper } from "swiper/react";

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
