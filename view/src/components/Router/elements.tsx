import type React from "react";
import { Suspense, lazy } from "react";

const create =
  (Inner: React.LazyExoticComponent<React.FC>, Loading?: React.ReactNode): React.FC =>
  () => {
    if (Loading) return <Suspense fallback={Loading}>{<Inner />}</Suspense>;
    return <Suspense fallback={<div />}>{<Inner />}</Suspense>;
  };

export const LazyHome = create(lazy(() => import("../../screens/Home")));
export const LazyMyNodes = create(lazy(() => import("../../screens/Nodes/MyNodes")));
export const LazyNode = create(lazy(() => import("../../screens/Nodes/Node")));
export const LazyCreate = create(lazy(() => import("../../screens/Nodes/Create")));
export const LazyFaucet = create(lazy(() => import("../../screens/Faucet")));
export const LazyNotFound = create(lazy(() => import("../../screens/NotFound")));
export const LazyLogin = create(lazy(() => import("../../screens/Login")));
export const LazyImplement = create(lazy(() => import("../../screens/Implementing")));
