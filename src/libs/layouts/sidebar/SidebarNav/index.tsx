import React from "react";
import { SidebarNavLink } from "../SidebarNavLink";
import { NewBoard } from "../../modal/NewBoard";
import useDashboardStore from "../../../../store/dashboardStore";
import * as S from "./styles";

export const SidebarNav = () => {
  const board = useDashboardStore((state) => state.dashboard);

  return (
    <S.SidebarNavContainer>
      <h2>all boards ({board.length})</h2>
      <ul>
        {board.map((item: any, index: any) => {
          return <SidebarNavLink item={item} index={index} />;
        })}
        <NewBoard />
      </ul>
    </S.SidebarNavContainer>
  );
};
