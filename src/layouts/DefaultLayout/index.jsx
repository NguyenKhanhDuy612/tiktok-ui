import React from "react";
import Header from "../components/Header/Header";
import SideBar from "./SideBar/SideBar";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-[60px] h-screen">
        <div className="container">
          <div className="flex">
            <SideBar />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
