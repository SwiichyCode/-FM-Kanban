import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useDashboardStore from "../../../../store/dashboardStore";
import { ModalWrapper } from "../../../components/Wrapper/ModalWrapper";
import { InputGenerator } from "../../../components/Form/InputGenerator/index";
import { Input } from "../../../components/Form/Input/index";
import { Button } from "../../../components/Button";
import { useToggle } from "../../../../hooks/useToggle";
import { IconBoard } from "../../sidebar/SidebarIcon";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as S from "./styles";

export const NewBoard = () => {
  const initialInputFields = [];
  const { state: open, toggle: setOpen } = useToggle();
  const [inputFields, setInputFields] = useState(initialInputFields);

  const addBoard = useDashboardStore((state) => state.addBoard);
  let navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newBoard = {
      id: uuidv4(),
      name: data.name,
      columns: inputFields,
    };

    addBoard(newBoard);
    setInputFields(initialInputFields);
    reset();
    navigate(`/${newBoard.id}`);
    setOpen();
  };

  return (
    <>
      <li>
        <S.SidebarModalContainer className="nav-item" onClick={setOpen}>
          <IconBoard />
          <span className="nav-newBoard">+ create new board</span>
        </S.SidebarModalContainer>
      </li>
      <ModalWrapper
        isOpen={open}
        onRequestClose={setOpen}
        title="new board"
        selector="#root"
        portalClassName="modal-portal"
      >
        <div className="modal-header">
          <h2 className="modal-title">Add New Board</h2>
        </div>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText="Name"
            placeholder="e.g Web Design"
            register={register("name", { required: true })}
          />
          <InputGenerator
            labelText="Columns"
            inputFields={inputFields}
            placeholder={inputFields.placeholder}
            setInputFields={setInputFields}
          />

          <Button type="submit" theme="primary" text="Create a New Board" />
        </S.Form>
      </ModalWrapper>
    </>
  );
};
