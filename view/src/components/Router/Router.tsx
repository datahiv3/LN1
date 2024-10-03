import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import { LazyCreate, LazyFaucet, LazyHome, LazyMyNodes, LazyNode, LazyNotFound } from "./elements";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<LazyHome />} />
          <Route path="/my-nodes" element={<LazyMyNodes />} />
          <Route path="/node" element={<LazyNode />} />
          <Route path="/create" element={<LazyCreate />} />
          <Route path="/faucet" element={<LazyFaucet />} />
          <Route path="*" element={<LazyNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
