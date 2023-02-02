import React from "react";
import { useParams } from "react-router-dom";
// import { ManageBoard } from "../modal/ManageBoard";

import { HeaderContainer } from "./style";
import useDashboardStore from "../../../store/dashboardStore";
import { NewTask } from "../modal/NewTask";

export const Header = () => {
  const { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const currentBoard = board.find((item) => item.id === id);

  console.log(board);

  return (
    <HeaderContainer>
      <div className="left-side">
        <h1>{currentBoard && currentBoard.name}</h1>
      </div>
      <div className="right-side">
        <NewTask />
        {/* <ManageBoard boardName={boardName} /> */}
      </div>
    </HeaderContainer>
  );
};
