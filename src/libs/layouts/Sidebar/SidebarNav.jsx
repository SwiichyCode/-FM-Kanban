import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { boardState } from "../../data/store";

export const SidebarNav = () => {
  const boardData = useRecoilValue(boardState);
  const urlSplit = (item) => item.split(" ").join("_");

  return (
    <SidebarNavContainer>
      <h2>all boards ({boardData.length})</h2>
      <ul>
        {boardData.map((item, index) => {
          return (
            <li>
              <NavLink
                to={`/${urlSplit(item.name)}`}
                className={({ isActive }) =>
                  isActive ? "nav-item activeClassName" : "nav-item"
                }
                key={index}
              >
                <MdOutlineSpaceDashboard size={"1.5em"} className="btn-icon" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          );
        })}
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

      /* &:last-child {
        color: var(--main-purple);
      } */

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
