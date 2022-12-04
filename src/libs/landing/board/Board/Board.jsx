import React from "react";
import styled from "styled-components";
import { EmptyBoard } from "./EmptyBoard";
import { ColumnWrapper } from "../Column/ColumnWrapper";
import { useFilteredData } from "../../../../hooks/useFilteredData";

export const Board = () => {
  const boardData = useFilteredData();

  return (
    <BoardContainer>
      {boardData.length !== 0 ? (
        boardData.map((item, index) => (
          <ColumnWrapper item={item} key={index} />
        ))
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
