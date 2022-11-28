import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { boardState } from "../../../../store/store";
import { urlSplit } from "../../../../helpers/urlSplit";
import { EmptyBoard } from "./EmptyBoard";
import { ColumnWrapper } from "../Column/ColumnWrapper";

export const Board = () => {
  let { name } = useParams();
  const boardData = useRecoilValue(boardState);

  return (
    <BoardContainer>
      {boardData.length !== 0 ? (
        boardData
          .filter((item) => urlSplit(item.name) === name)
          .map((item, index) => <ColumnWrapper item={item} key={index} />)
      ) : (
        <EmptyBoard />
      )}
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  width: 100%;
  height: calc(100vh - var(--header-h));
  padding: 24px;
`;
