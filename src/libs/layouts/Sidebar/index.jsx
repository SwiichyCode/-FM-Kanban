import React from "react";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarNav } from "./SidebarNav";
import { SidebarContainer } from "./style";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="sidebar-top">
        <SidebarLogo />
        <SidebarNav />
      </div>
      <div className="sidebar-bottom">
        {/* ToggleTheme */}
        {/* SidebarHide */}
      </div>
    </SidebarContainer>
  );
};
