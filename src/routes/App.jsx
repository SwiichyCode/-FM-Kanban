import React from "react";
import { LayoutApp } from "../libs/components/layouts/LayoutApp";
import { Sidebar } from "../libs/layouts/Sidebar";
import { Board } from "../libs/layouts/Board";

export const App = () => {
  return (
    <LayoutApp>
      <Sidebar />
      <Board />
    </LayoutApp>
  );
};
