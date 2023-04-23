import AuthService from "../../../auth/services/auth.service";
import { useParams } from "react-router-dom";
import { ManageBoard } from "../Modal/ManageBoard";
import { useBoardStore } from "../../stores/boardStore";
import { useSidebarStore } from "../../../../stores/sidebarStore";
// import { NewTask } from "../modal/NewTask";
import { Button } from "../../../../components/Button";
import logo from "../../../../assets/logo-dark.svg";
import * as S from "./styles";

export const Header = () => {
  const { id } = useParams();
  const boards = useBoardStore((state) => state.boards);
  const sidebar = useSidebarStore((state) => state.sidebar);
  const currentBoard = boards.find((item) => item.id === id);

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

        <div className="right-side" id="manage-board">
          <Button
            theme="primary"
            text="Logout"
            maxW={130}
            onClick={() => AuthService.logout()}
          />
          {currentBoard && (
            // <NewTask />
            <ManageBoard boardName={currentBoard.name} />
          )}
        </div>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};
