import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

interface Props {
  src: string;
}

export const Container = styled(SwiperSlide)`
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
