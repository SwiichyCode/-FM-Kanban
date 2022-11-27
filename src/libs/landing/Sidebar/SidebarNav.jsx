import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { boardState } from "../../../store/store";
import { SidebarModal } from "./Modal/SidebarModal";
import { SidebarNavLink } from "./SidebarNavLink";

export const SidebarNav = () => {
  const boardData = useRecoilValue(boardState);
  console.log("no");
  const SidebarNavItem = () => {
    return boardData.map((item, index) => {
      return <SidebarNavLink item={item.name} index={index} />;
    });
  };

  return (
    <SidebarNavContainer>
      <h2>all boards ({boardData.length})</h2>
      <ul>
        <SidebarNavItem />
        <SidebarModal />
      </ul>
    </SidebarNavContainer>
  );
};

const SidebarNavContainer = styled.nav`
  color: var(--medium-grey);

  h2 {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    padding: 0px 0 19px 24px;
    transition: all 200ms ease-in-out;
    @media screen and (min-width: 1024px) {
      padding: 0px 0 19px 32px;
    }
  }

  li {
    width: 100%;
    max-width: 240px;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.9rem;
    text-transform: capitalize;

    &:last-child {
      color: var(--main-purple) !important;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;

    .nav-item {
      width: 100%;
      max-width: 240px;
      display: flex;
      align-items: center;
      padding: 14px 0 15px 24px;
      border-radius: 0px 100px 100px 0px;
      text-decoration: none;
      color: var(--medium-grey);
      cursor: pointer;
      transition: all 200ms ease-in-out;

      &.activeClassName {
        color: #fff;
        background: var(--main-purple);
      }

      @media screen and (min-width: 1024px) {
        padding: 14px 0 15px 32px;
      }

      &:hover {
        background: #f0effa;
        color: var(--main-purple);
      }

      svg {
        margin-right: 12px;
      }
    }
  }
`;
