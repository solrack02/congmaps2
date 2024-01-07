// ----------- import Packs
import React from "react";
import { Router } from "@morfos/routes";
import { Connect, setData } from "./config/centralData";
import { setRoutes } from "./config/routes/setRoutes";

// ----------- import Internals

// ----------- export Component
export const MainComp = () => {
  // ----------- set Return
  return (
    <Connect>
      <ConnectedRouter />
    </Connect>
  );
};

const ConnectedRouter = () => {
  // ----------- set Changes
  const getData = (path: string) =>
    setData(() => [{ path: "dev.selectedRoute", val: path }]);

  // ----------- set Return
  return <Router setHome="home" routes={setRoutes()} getData={getData} />;
};
