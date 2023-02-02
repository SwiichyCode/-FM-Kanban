import React from "react";
import styled from "styled-components";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarNav } from "./SidebarNav";
import { SidebarTheme } from "./SidebarTheme";
import { SidebarHide } from "./SidebarHide";
import { useToggle } from "../../../hooks/useToggle";
import iconShow from "../../../assets/icon-show-sidebar.svg";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useToggle(true);

  return openSidebar ? (
    <SidebarContainer>
      <div className="sidebar-top">
        <SidebarLogo />
        <SidebarNav />
      </div>
      <div className="sidebar-bottom">
        <SidebarTheme />
        <SidebarHide setOpenSidebar={setOpenSidebar} />
      </div>
    </SidebarContainer>
  ) : (
    <SidebarShow onClick={setOpenSidebar}>
      <img src={iconShow} alt="" />
    </SidebarShow>
  );
};

const SidebarShow = styled.div`
  position: absolute;
  bottom: 32px;
  width: 56px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--main-purple);
  border-radius: 0px 100px 100px 0px;
  cursor: pointer;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  height: 100vh;
  padding: 32px 0;
  border-right: 1px solid var(--line-light);
  background: var(--white);

  .sidebar-top {
    display: flex;
    flex-direction: column;
    gap: 54px;
  }

  .sidebar-bottom {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
