import React from "react";
import { ManageBoard } from "../../modal/ManageBoard";
import { NewTask } from "../../modal/NewTask";
import { useRecoilValue } from "recoil";
import { useFilteredData } from "../../../../hooks/useFilteredData";
import { boardState } from "../../../../store/store";
import { HeaderContainer } from "./style";

export const Header = () => {
  const data = useRecoilValue(boardState);
  const boardData = useFilteredData(data);

  return (
    <HeaderContainer>
      <div className="left-side">
        <h1>Platform Launch</h1>
      </div>
      <div className="right-side">
        {boardData.map((item, index) => {
          return <NewTask item={item} key={index} />;
        })}
        <ManageBoard />
      </div>
    </HeaderContainer>
  );
};
