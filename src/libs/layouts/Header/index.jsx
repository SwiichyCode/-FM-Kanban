import React from "react";
import { useParams } from "react-router-dom";
import { ManageBoard } from "../modal/ManageBoard";

import { HeaderContainer, HeaderWrapper } from "./style";
import useDashboardStore from "../../../store/dashboardStore";
import { NewTask } from "../modal/NewTask";

export const Header = () => {
  const { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const currentBoard = board.find((item) => item.id === id);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div className="left-side">
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
