import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IconBoard } from "./SidebarIcon";

interface SidebarNavLinkProps {
  item: any;
  index: any;
}

export const SidebarNavLink = ({ item, index }: SidebarNavLinkProps) => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.li``;
