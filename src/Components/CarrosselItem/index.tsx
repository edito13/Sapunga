import React from "react";
import { CarrosselItem } from "../Slider Header/style";

interface Props {
  image: number;
}

const index: React.FC<Props> = ({ image }) => {
  return (
    <CarrosselItem src={`./assets/Images/${image}.jpg`}>
      <div>
        <div>
          <h1>SAPUNGA</h1>
        </div>
      </div>
    </CarrosselItem>
  );
};

export default index;
