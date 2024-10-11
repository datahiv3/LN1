import type React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileLayout from "../Layout/ProfileLayout";
import RootLayout from "../Layout/RootLayout";
import PublicOnly from "./PublicOnly";
import RequireAdmin from "./RequireAdmin";
import RequireAuth from "./RequireAuth";
import {
  LazyAdminFee,
  LazyAdminNodes,
  LazyAdminOverview,
  LazyAdminStaking,
  LazyAdminUserProfiles,
  LazyAdminWhitelist,
  LazyCreate,
  LazyEditProfile,
  LazyFaucet,
  LazyHome,
  LazyLogin,
  LazyMyNodes,
  LazyNode,
  LazyNotFound,
  LazyProfile,
} from "./elements";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<LazyHome />} />

          {/* public only */}
          <Route path="/" element={<PublicOnly />}>
            <Route path="/auth/login" element={<LazyLogin />} />
          </Route>

          {/* require auth */}
          <Route path="/" element={<RequireAuth />}>
            <Route path="/faucet" element={<LazyFaucet />} />

            <Route path="/profile" element={<ProfileLayout />}>
              <Route path="/profile" element={<LazyProfile />} />
              <Route path="/profile/edit" element={<LazyEditProfile />} />
            </Route>

            <Route path="/my-nodes" element={<LazyMyNodes />} />
            <Route path="/node" element={<LazyNode />} />
            <Route path="/create" element={<LazyCreate />} />

            {/* require admin */}
            <Route path="/admin" element={<RequireAdmin />}>
              <Route path="/admin" element={<LazyAdminOverview />} />
              <Route path="/admin/whitelist" element={<LazyAdminWhitelist />} />
              <Route path="/admin/fee" element={<LazyAdminFee />} />
              <Route path="/admin/staking" element={<LazyAdminStaking />} />
              <Route path="/admin/nodes" element={<LazyAdminNodes />} />
              <Route path="/admin/user/profiles" element={<LazyAdminUserProfiles />} />
            </Route>
          </Route>

          <Route path="*" element={<LazyNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
