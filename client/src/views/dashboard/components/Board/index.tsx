import { useBoardStore } from "../../stores/boardStore";
import { useSidebarStore } from "../../../../stores/sidebarStore";
import { BoardWrapper } from "./styles";
import { EmptyBoard } from "../EmptyBoard";

export const Board = () => {
  const boards = useBoardStore((state) => state.boards);
  const sidebar = useSidebarStore((state) => state.sidebar);

  return (
    <BoardWrapper sidebar={sidebar}>
      {!boards.length && <EmptyBoard />}
    </BoardWrapper>
  );
};
