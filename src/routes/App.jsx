import React from "react";
import { LayoutApp } from "../libs/components/layouts/LayoutApp";
import { Sidebar } from "../libs/layouts/Sidebar";

export const App = () => {
  return (
    <LayoutApp>
      <Sidebar />
    </LayoutApp>
  );
};
