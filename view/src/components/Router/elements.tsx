import React, { lazy, Suspense } from "react";

const create =
  (Inner: React.LazyExoticComponent<React.FC>, Loading?: React.ReactNode): React.FC =>
  () => {
    if (Loading) return <Suspense fallback={Loading}>{<Inner />}</Suspense>;
    return <Suspense fallback={<div></div>}>{<Inner />}</Suspense>;
  };

export const LazyHome = create(lazy(() => import("../../screens/Home")));
export const LazyMyNodes = create(lazy(() => import("../../screens/MyNodes")));
export const LazyNode = create(lazy(() => import("../../screens/Node")));
export const LazyCreate = create(lazy(() => import("../../screens/Create")));
export const LazyFaucet = create(lazy(() => import("../../screens/Faucet")));
export const LazyNotFound = create(lazy(() => import("../../screens/NotFound")));
