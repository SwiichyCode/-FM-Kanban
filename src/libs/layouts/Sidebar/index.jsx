import React from "react";
import styled from "styled-components";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarNav } from "./SidebarNav";

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

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 100vh;
  padding: 32px 0;
  border-right: 1px solid var(--line-light);
  background: var(--white);

  .sidebar-top {
    display: flex;
    flex-direction: column;
    gap: 54px;
  }

  .sidebar-bot {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
