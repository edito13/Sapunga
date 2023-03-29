import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CarrosselContainer = styled(Swiper)`
  &.swiper {
    padding: 0;
    max-width: 500px;
  }

  .swiper-slide {
    margin-bottom: 1em;
  }

  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background: #000066;
  }

  .swiper-pagination-bullet-active {
    background: #000066;
  }
`;
