import { NavLink } from "react-router-dom";
import { IconBoard } from "../SidebarIcon";
import { SidebarNavLinkProps } from "./types";
import { SidebarNavLinkWrapper } from "./styles";

export const SidebarNavLink = ({ item, index }: SidebarNavLinkProps) => {
  return (
    <SidebarNavLinkWrapper>
      <NavLink
        to={`/${item.id}`}
        className={({ isActive }) =>
          isActive ? "nav-item activeClassName" : "nav-item"
        }
        key={index}
      >
        <IconBoard />
        <span>{item.name}</span>
      </NavLink>
    </SidebarNavLinkWrapper>
  );
};
