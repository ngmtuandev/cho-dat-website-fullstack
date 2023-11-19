import { Button } from "@material-tailwind/react";
import { Banner, TopHeader } from "../components";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <main className="w-[100%] h-[100%] bg-white">
      <div>
        <TopHeader></TopHeader>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </main>
  );
};

export default ClientLayout;
