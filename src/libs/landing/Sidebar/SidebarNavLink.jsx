import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { urlSplit } from "../../../helpers/urlSplit";

export const SidebarNavLink = ({ item, index }) => {
  return (
    <li>
      <NavLink
        to={`/${urlSplit(item)}`}
        className={({ isActive }) =>
          isActive ? "nav-item activeClassName" : "nav-item"
        }
        key={index}
      >
        <MdOutlineSpaceDashboard size={"1.5em"} className="btn-icon" />
        <span>{item}</span>
      </NavLink>
    </li>
  );
};
