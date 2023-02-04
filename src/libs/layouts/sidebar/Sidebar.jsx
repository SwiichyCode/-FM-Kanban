import React from "react";
import styled from "styled-components";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarNav } from "./SidebarNav";
import { SidebarTheme } from "./SidebarTheme";
import { SidebarHide } from "./SidebarHide";
import { useToggle } from "../../../hooks/useToggle";
import iconShow from "../../../assets/icon-show-sidebar.svg";
import { useSidebarStore } from "../../../store/sidebarStore";

// Todo 1: Refact animation sidebar

export const Sidebar = () => {
  // const [openSidebar, setOpenSidebar] = useToggle(true);
  const sidebar = useSidebarStore((state) => state.sidebar);
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <>
      <SidebarContainer sidebar={sidebar}>
        <div className="sidebar-top">
          <SidebarLogo />
          <SidebarNav />
        </div>
        <div className="sidebar-bottom">
          <SidebarTheme />
          <SidebarHide toggleSidebar={toggleSidebar} />
        </div>
      </SidebarContainer>

      {!sidebar && (
        <SidebarShow onClick={toggleSidebar}>
          <img src={iconShow} alt="" />
        </SidebarShow>
      )}
    </>
  );
};

const SidebarShow = styled.div`
  position: absolute;
  bottom: 3.2rem;
  width: 5.6rem;
  height: 4.8rem;

  ${({ theme }) => theme.mixins.flexCenter}
  background: var(--main-purple);
  border-radius: 0px 10rem 10rem 0px;
  cursor: pointer;
`;

const SidebarContainer = styled.div`
  position: relative;
  ${({ theme }) => theme.mixins.flexColumn}
  justify-content: space-between;
  height: 100vh;
  border-right: ${({ theme, sidebar }) =>
    sidebar ? theme.theme.border : "none"};
  background: ${({ theme }) => theme.theme.sidebar};
  ${({ sidebar }) => (sidebar ? "width: 300px" : "width: 0px")};
  min-width: ${({ sidebar }) => (sidebar ? "300px" : "0px")} !important;
  left: ${({ sidebar }) => (sidebar ? "0" : "-300px")};
  opacity: ${({ sidebar }) => (sidebar ? "1" : "0")};
  padding: 3.2rem 0;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1300px) {
    min-width: ${({ sidebar }) => (sidebar ? "261px" : "0px")} !important;
  }

  .sidebar-top {
    ${({ theme }) => theme.mixins.flexColumn}
    gap: 5.4rem;
  }

  .sidebar-bottom {
    width: 100%;
    ${({ theme }) => theme.mixins.flexColumn}
    gap: 1.6rem;
  }
`;
