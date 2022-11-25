import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { boardState } from "../../data/store";
import { SidebarModal } from "./SidebarModal";
import { urlSplit } from "../../utils/urlSplit";
import { useToggle } from "../../hooks/useToggle";
import { SidebarNavFilter } from "./SidebarNavFilter";

export const SidebarNav = () => {
  const [alphabetically, setAlphabetically] = useToggle();
  const boardData = useRecoilValue(boardState);
  const boardName = boardData.map((item) => item.name);

  const Link = ({ item, index }) => {
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

  const SidebarNavItem = () => {
    if (alphabetically) {
      return boardName
        .sort((a, b) => a.localeCompare(b))
        .map((item, index) => {
          return <Link item={item} index={index} />;
        });
    } else {
      return boardName.map((item, index) => {
        return <Link item={item} index={index} />;
      });
    }
  };

  return (
    <SidebarNavContainer>
      <h2>all boards ({boardData.length})</h2>
      <ul>
        <SidebarNavItem />
        <SidebarNavFilter setAlphabetically={setAlphabetically} />
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
