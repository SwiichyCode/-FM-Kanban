import React from "react";
import { useParams } from "react-router-dom";
import useDashboardStore from "../../../../../store/dashboardStore";
import { EmptyBoard } from "../EmptyBoard";
import { ColumnWrapper } from "../../Column/ColumnWrapper";
import { useSidebarStore } from "../../../../../store/sidebarStore";
import * as S from "./styles";

export const Board = () => {
  const { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const currentBoard = board.filter((item: any) => item.id === id);
  const sidebar = useSidebarStore((state) => state.sidebar);

  return (
    <S.BoardContainer sidebar={sidebar}>
      {currentBoard.length > 0 ? (
        currentBoard.map((item: any) => (
          <ColumnWrapper item={item} key={board.id} />
        ))
      ) : (
        <EmptyBoard />
      )}
    </S.BoardContainer>
  );
};
