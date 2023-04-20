import { SidebarNavLink } from "../SidebarNavLink";

import { SidebarNavContainer } from "./styles";
import { NewBoard } from "../../Modal/NewBoard";

export const SidebarNav = () => {
  const board = [] as any;

  return (
    <SidebarNavContainer>
      <h2>all boards ({board.length})</h2>
      <ul>
        {board.map((item: any, index: any) => {
          return <SidebarNavLink item={item} index={index} />;
        })}
        <NewBoard />
      </ul>
    </SidebarNavContainer>
  );
};
