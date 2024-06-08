import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className=" bg-sky-800 h-[500vh] flex justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
