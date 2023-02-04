import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useDashboardStore from "../../../../store/dashboardStore";
import { EmptyBoard } from "./EmptyBoard";
import { ColumnWrapper } from "../Column/ColumnWrapper";
import { useSidebarStore } from "../../../../store/sidebarStore";

export const Board = () => {
  const { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const currentBoard = board.filter((item) => item.id === id);
  const sidebar = useSidebarStore((state) => state.sidebar);

  return (
    <BoardContainer sidebar={sidebar}>
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
  max-width: ${({ sidebar }) => (sidebar ? "calc(100vw - 300px)" : "100vw")};
  height: calc(100vh - var(--header-h));
  padding: ${({ sidebar }) =>
    sidebar ? "24px" : "24px 24px 24px calc(48px + 24px)"};
  overflow: auto;
  background: ${({ theme }) => theme.theme.board};
`;
