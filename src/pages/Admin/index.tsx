import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../Components/NavBar";

const index = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default index;
