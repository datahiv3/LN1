import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import { LazyHome } from "./elements";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<LazyHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
