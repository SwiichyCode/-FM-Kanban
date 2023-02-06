import React from "react";
import { useParams } from "react-router-dom";
import { ManageBoard } from "../modal/ManageBoard";

import { HeaderContainer, HeaderWrapper, Logo } from "./style";
import useDashboardStore from "../../../store/dashboardStore";
import { useSidebarStore } from "../../../store/sidebarStore";
import { NewTask } from "../modal/NewTask";

import logo from "../../../assets/logo-dark.svg";

export const Header = () => {
  const { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const sidebar = useSidebarStore((state) => state.sidebar);
  const currentBoard = board.find((item) => item.id === id);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div className="left-side">
          {!sidebar && (
            <Logo className="logo">
              <img src={logo} alt="logo" />{" "}
            </Logo>
          )}

          <h1>{currentBoard && currentBoard.name}</h1>
        </div>

        {currentBoard && (
          <div className="right-side" id="manage-board">
            <NewTask />
            <ManageBoard boardName={currentBoard.name} />
          </div>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};
