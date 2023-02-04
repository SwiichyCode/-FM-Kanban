import React from "react";
import { useParams } from "react-router-dom";
import { ManageBoard } from "../modal/ManageBoard";

import { HeaderContainer } from "./style";
import useDashboardStore from "../../../store/dashboardStore";
import { NewTask } from "../modal/NewTask";

export const Header = () => {
  const { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const resetStorage = useDashboardStore((state) => state.resetStorage);
  const currentBoard = board.find((item) => item.id === id);

  return (
    <HeaderContainer>
      <div className="header-wrapper">
        <div className="left-side">
          <h1>{currentBoard && currentBoard.name}</h1>
          {/* <button onClick={resetStorage}>reset storage</button> */}
        </div>

        {currentBoard && (
          <div className="right-side">
            <NewTask />
            <ManageBoard boardName={currentBoard.name} />
          </div>
        )}
      </div>
    </HeaderContainer>
  );
};
