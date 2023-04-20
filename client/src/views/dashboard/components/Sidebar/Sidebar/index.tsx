import { useSidebarStore } from "../../../../../stores/sidebarStore";
import { SidebarLogo } from "../SidebarLogo";
import { SidebarNav } from "../SidebarNav";
import { SidebarTheme } from "../SidebarTheme";
import { SidebarHide } from "../SidebarHide";
import { SidebarContainer, SidebarShow } from "./styles";
import iconShow from "../../../../../assets/icon-show-sidebar.svg";

export const Sidebar = () => {
  const sidebarOpen = useSidebarStore((state) => state.sidebar);
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <>
      <SidebarContainer sidebarOpen={sidebarOpen}>
        <div className="sidebar-top">
          <SidebarLogo />
          <SidebarNav />
          {/* <Tooltip /> */}
        </div>
        <div className="sidebar-bottom">
          <SidebarTheme />
          <SidebarHide toggleSidebar={toggleSidebar} />
        </div>
      </SidebarContainer>

      {!sidebarOpen && (
        <SidebarShow onClick={toggleSidebar}>
          <img src={iconShow} alt="" />
        </SidebarShow>
      )}
    </>
  );
};
