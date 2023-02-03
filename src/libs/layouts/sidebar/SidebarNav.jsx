import React from "react";
import styled from "styled-components";
import { SidebarNavLink } from "./SidebarNavLink";
import { NewBoard } from "../modal/NewBoard";
import useDashboardStore from "../../../store/dashboardStore";

export const SidebarNav = () => {
  const board = useDashboardStore((state) => state.dashboard);

  return (
    <SidebarNavContainer>
      <h2>all boards ({board.length})</h2>
      <ul>
        {board.map((item, index) => {
          return <SidebarNavLink item={item} index={index} />;
        })}
        <NewBoard />
      </ul>
    </SidebarNavContainer>
  );
};

const SidebarNavContainer = styled.nav`
  color: var(--medium-grey);

  h2 {
    font-weight: var(--font-bold);
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    padding: 0px 0 1.9rem 2.4rem;
    transition: all 200ms ease-in-out;

    @media screen and (min-width: 1024px) {
      padding: 0px 0 1.9rem 3.2rem;
    }
  }

  li {
    width: 100%;
    max-width: 24rem;
    font-weight: var(--font-bold);
    font-size: 1.5rem;
    line-height: 1.9rem;
    text-transform: capitalize;
  }

  ul {
    ${({ theme }) => theme.mixins.flexColumn}
    width: 100%;

    .nav-item {
      width: 100%;
      max-width: 24rem;
      ${({ theme }) => theme.mixins.flexAlignCenter}
      padding: 1.4rem 0 1.5rem 2.4rem;
      border-radius: var(--border-xl);
      text-decoration: none;
      color: var(--color-grey);
      cursor: pointer;
      transition: all 200ms ease-in-out;

      &.activeClassName {
        color: #fff;
        background: var(--color-purple);
      }

      @media screen and (min-width: 1024px) {
        padding: 1.4rem 0 1.5rem 3.2rem;
      }

      &:hover {
        // ???
        background: #f0effa;
        color: var(--color-purple);
      }

      svg {
        margin-right: 1.2rem;
      }
    }
  }
`;
