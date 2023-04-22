import { SidebarNavLink } from "../SidebarNavLink";
import { SidebarNavContainer } from "./styles";
import { NewBoard } from "../../Modal/NewBoard";
import { useEffect } from "react";
import useBoardStore from "../../../stores/boardStore";

export const SidebarNav = () => {
  const boards = useBoardStore((state) => state.boards);
  const getBoards = useBoardStore((state) => state.getBoards);

  useEffect(() => {
    getBoards();
  }, [boards]);

  return (
    <SidebarNavContainer>
      <h2>all boards ({boards.length})</h2>
      <ul>
        {boards.map((item: any, index: any) => {
          return <SidebarNavLink item={item} index={index} />;
        })}
        <NewBoard />
      </ul>
    </SidebarNavContainer>
  );
};
