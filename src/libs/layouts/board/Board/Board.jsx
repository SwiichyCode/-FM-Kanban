import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useDashboardStore from "../../../../store/dashboardStore";
import { EmptyBoard } from "./EmptyBoard";
import { ColumnWrapper } from "../Column/ColumnWrapper";

export const Board = () => {
  const { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const currentBoard = board.filter((item) => item.id === id);

  return (
    <BoardContainer>
      {currentBoard.length > 0 ? (
        currentBoard.map((item) => <ColumnWrapper item={item} key={board.id} />)
      ) : (
        <EmptyBoard />
      )}
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  width: 100%;
  height: calc(100vh - var(--header-h));
  padding: 2.4rem;
  background: ${({ theme }) => theme.theme.board};
`;
