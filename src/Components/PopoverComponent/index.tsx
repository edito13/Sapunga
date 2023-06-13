import React from "react";
import { Popover } from "@mui/material";
import { Msg } from "./style";

interface Props {
  open: boolean;
  onClose: () => void;
  msg: string;
}

const index: React.FC<Props> = ({ onClose, msg, open }) => {
  return (
    <Popover
      id="simple-popover"
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Msg>
        <p>{msg}</p>
      </Msg>
    </Popover>
  );
};

export default index;
