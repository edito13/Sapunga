import React, { ReactNode } from "react";
import { BlueButton } from "./style";

interface props {
  Icon?: ReactNode;
  children: string;
}

const index: React.FC<props> = ({ Icon, children }) => {
  return (
    <BlueButton variant="contained" startIcon={Icon} disableElevation>
      {children}
    </BlueButton>
  );
};

export default index;
