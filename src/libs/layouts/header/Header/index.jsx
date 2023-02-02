import React from "react";
import { useParams } from "react-router-dom";
import { ManageBoard } from "../../modal/ManageBoard";
import { NewTask } from "../../modal/NewTask";
import { useRecoilValue } from "recoil";
import { useFilteredData } from "../../../../hooks/useFilteredData";
import { boardState } from "../../../../store/store";
import { HeaderContainer } from "./style";
import useDashboardStore from "../../../../store/dashboardStore";

export const Header = () => {
  // const data = useRecoilValue(boardState);
  // const boardData = useFilteredData(data);
  // const boardName = boardData.map((item) => item.name);
  const { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const currentBoard = board.find((item) => item.id === id);

  return (
    <HeaderContainer>
      <div className="left-side">
        <h1>{currentBoard && currentBoard.name}</h1>
      </div>
      {/* <div className="right-side">
        {boardData.map((item, index) => {
          return <NewTask item={item} key={index} />;
        })}
        <ManageBoard boardName={boardName} />
      </div> */}
    </HeaderContainer>
  );
};
