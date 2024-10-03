import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Container from "./Container";

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header />
      <Container className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default RootLayout;
