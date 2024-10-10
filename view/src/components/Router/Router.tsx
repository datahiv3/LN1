import type React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import PublicOnly from "./PublicOnly";
import RequireAdmin from "./RequireAdmin";
import RequireAuth from "./RequireAuth";
import { LazyCreate, LazyFaucet, LazyHome, LazyImplement, LazyLogin, LazyMyNodes, LazyNode, LazyNotFound } from "./elements";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<LazyHome />} />

          <Route path="/my-nodes" element={<LazyMyNodes />} />

          {/* public only */}
          <Route path="/" element={<PublicOnly />}>
            <Route path="/auth/login" element={<LazyLogin />} />
          </Route>

          {/* require auth */}
          <Route path="/" element={<RequireAuth />}>
            <Route path="/faucet" element={<LazyFaucet />} />

            <Route path="/node" element={<LazyNode />} />
            <Route path="/create" element={<LazyCreate />} />

            {/* require admin */}
            <Route path="/admin" element={<RequireAdmin />}>
              <Route path="/admin" element={<LazyImplement />} />
              <Route path="/admin/whitelist" element={<LazyImplement />} />
              <Route path="/admin/fee" element={<LazyImplement />} />
              <Route path="/admin/staking" element={<LazyImplement />} />
              <Route path="/admin/nodes" element={<LazyImplement />} />
            </Route>
          </Route>

          <Route path="*" element={<LazyNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
