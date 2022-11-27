import React from "react";
import { LayoutApp } from "../libs/components/wrapper/LayoutApp";
import { LayoutMain } from "../libs/components/wrapper/LayoutMain";
import { Sidebar } from "../libs/landing/Sidebar";
import { Board } from "../libs/landing/Board";
import { Header } from "../libs/landing/Header";

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
