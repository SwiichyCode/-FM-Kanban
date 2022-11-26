import React from "react";
import { LayoutApp } from "../libs/components/layouts/LayoutApp";
import { Sidebar } from "../libs/layouts/Sidebar";
import { Board } from "../libs/layouts/Board";
import { Header } from "../libs/layouts/Header";
import { LayoutMain } from "../libs/components/layouts/LayoutMain";
export const App = () => {
  return (
    <LayoutApp>
      <Sidebar />
      <LayoutMain>
        <Header />
        <Board />
      </LayoutMain>
    </LayoutApp>
  );
};
