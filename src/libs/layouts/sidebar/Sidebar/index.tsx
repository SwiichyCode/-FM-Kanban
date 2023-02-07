import React from "react";
import { SidebarLogo } from "../SidebarLogo";
import { SidebarNav } from "../SidebarNav";
import { SidebarTheme } from "../SidebarTheme";
import { SidebarHide } from "../SidebarHide";
import iconShow from "../../../../assets/icon-show-sidebar.svg";
import { useSidebarStore } from "../../../../store/sidebarStore";
import * as S from "./styles";

export const Sidebar = () => {
  const sidebar = useSidebarStore((state) => state.sidebar);
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <>
      <S.SidebarContainer sidebar={sidebar}>
        <div className="sidebar-top">
          <SidebarLogo />
          <SidebarNav />
          {/* <Tooltip /> */}
        </div>
        <div className="sidebar-bottom">
          <SidebarTheme />
          <SidebarHide toggleSidebar={toggleSidebar} />
        </div>
      </S.SidebarContainer>

      {!sidebar && (
        <S.SidebarShow onClick={toggleSidebar}>
          <img src={iconShow} alt="" />
        </S.SidebarShow>
      )}
    </>
  );
};
