import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { useToggle } from "../../../../../hooks/useToggle";
import { ModalWrapper } from "../ModalWrapper";
import { InputGenerator } from "../../../../../components/InputGenerator";
import { Input } from "../../../../../components/Input";
import { Button } from "../../../../../components/Button";
import { IconBoard } from "../../Sidebar/SidebarIcon";
import AuthService from "../../../../auth/services/auth.service";
import useBoardStore from "../../../stores/boardStore";
import * as S from "./styles";

export const NewBoard = () => {
  const [inputFields, setInputFields] = useState([]);
  const { state: openNewBoard, toggle: setOpenNewBoard } = useToggle();
  const { register, handleSubmit } = useForm();
  const createBoard = useBoardStore((state) => state.addBoard);
  // let navigate = useNavigate();

  const onSubmit = async (data: any) => {
    // get ownerID from local storage
    const user = await AuthService.getCurrentUser();

    const newBoard = {
      id: uuidv4(),
      name: data.name,
      // columns: data.columns,
      ownerID: user.ownerID,
    };

    await createBoard(newBoard);

    setInputFields([]);
    // navigate(`/${newBoard.id}`);
    setOpenNewBoard();
  };

  return (
    <>
      <li>
        <S.SidebarModalContainer
          className="nav-item"
          onClick={() => setOpenNewBoard()}
        >
          <IconBoard />
          <span className="nav-newBoard">+ create new board</span>
        </S.SidebarModalContainer>
      </li>
      <ModalWrapper
        isOpen={openNewBoard}
        onRequestClose={() => setOpenNewBoard()}
        selector="#root"
        portalClassName="modal-portal"
      >
        <div className="modal-header">
          <h2 className="modal-title">Add New Board</h2>
        </div>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText="Name"
            type="text"
            placeholder="e.g Web Design"
            register={register}
            name="name"
          />
          <InputGenerator
            labelText="Columns"
            inputFields={inputFields}
            register={register}
            setInputFields={setInputFields}
          />

          <Button type="submit" theme="primary" text="Create a New Board" />
        </S.Form>
      </ModalWrapper>
    </>
  );
};
