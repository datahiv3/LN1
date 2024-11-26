import type React from "react";
import { Suspense, lazy } from "react";

const create =
  (Inner: React.LazyExoticComponent<React.FC>, Loading?: React.ReactNode): React.FC =>
  () => {
    if (Loading) return <Suspense fallback={Loading}>{<Inner />}</Suspense>;
    return <Suspense fallback={<div />}>{<Inner />}</Suspense>;
  };

export const LazyHome = create(lazy(() => import("../../screens/Home")));

export const LazyLogin = create(lazy(() => import("../../screens/Login")));

export const LazyFaucet = create(lazy(() => import("../../screens/Faucet")));
export const LazyProfile = create(lazy(() => import("../../screens/Profile/Profile")));
export const LazyCreateProfile = create(lazy(() => import("../../screens/Profile/Create")));
export const LazyViewProfile = create(lazy(() => import("../../screens/Profile/View")));

export const LazyMyNodes = create(lazy(() => import("../../screens/Nodes/MyNodes")));
export const LazyMyStaking = create(lazy(() => import("../../screens/Nodes/MyStaking")));
export const LazyNode = create(lazy(() => import("../../screens/Nodes/Node")));
export const LazyCreate = create(lazy(() => import("../../screens/Nodes/Create")));

export const LazyAdminOverview = create(lazy(() => import("../../screens/Admin/Overview")));
export const LazyAdminWhitelisted = create(lazy(() => import("../../screens/Admin/Whitelisted")));
export const LazyAdminFee = create(lazy(() => import("../../screens/Admin/Fee")));
export const LazyAdminStaking = create(lazy(() => import("../../screens/Admin/Staking")));
export const LazyAdminNodes = create(lazy(() => import("../../screens/Admin/Nodes")));
export const LazyAdminUserProfiles = create(lazy(() => import("../../screens/Admin/UserProfiles")));

export const LazyNotFound = create(lazy(() => import("../../screens/NotFound")));
export const LazyImplement = create(lazy(() => import("../../screens/Implementing")));
