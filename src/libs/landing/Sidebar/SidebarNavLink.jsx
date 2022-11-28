import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { urlSplit } from "../../../helpers/urlSplit";
import { IconBoard } from "./IconBoard";

export const SidebarNavLink = ({ item, index }) => {
  return (
    <Container>
      <NavLink
        to={`/${urlSplit(item)}`}
        className={({ isActive }) =>
          isActive ? "nav-item activeClassName" : "nav-item"
        }
        key={index}
      >
        <IconBoard />
        <span>{item}</span>
      </NavLink>
    </Container>
  );
};

const Container = styled.li``;
