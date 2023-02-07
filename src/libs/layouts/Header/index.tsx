import React from "react";
import { useParams } from "react-router-dom";
import { ManageBoard } from "../modal/ManageBoard";
import useDashboardStore from "../../../store/dashboardStore";
import { useSidebarStore } from "../../../store/sidebarStore";
import { NewTask } from "../modal/NewTask";
import logo from "../../../assets/logo-dark.svg";
import * as S from "./styles";

export const Header = () => {
  const { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const sidebar = useSidebarStore((state) => state.sidebar);
  const currentBoard = board.find((item: any) => item.id === id);

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <div className="left-side">
          {!sidebar && (
            <S.Logo className="logo">
              <img src={logo} alt="logo" />{" "}
            </S.Logo>
          )}

          <h1>{currentBoard && currentBoard.name}</h1>
        </div>

        {currentBoard && (
          <div className="right-side" id="manage-board">
            <NewTask />
            <ManageBoard boardName={currentBoard.name} />
          </div>
        )}
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};
