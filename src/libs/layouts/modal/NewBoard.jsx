import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useDashboardStore from "../../../store/dashboardStore";
import { useRecoilState } from "recoil";
import { boardState } from "../../../store/store";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { InputGenerator } from "../../components/Form/InputGenerator/index";
import { Input } from "../../components/Form/Input/index";
import { Button } from "../../components/Button";
import { useToggle } from "../../../hooks/useToggle";
import { IconBoard } from "../sidebar/SidebarIcon";

export const NewBoard = () => {
  const initialInputFields = [
    // { name: "Todo", placeholder: "Todo...", tasks: [], id: uuidv4() },
    // { name: "Doing", placeholder: "Doing...", tasks: [], id: uuidv4() },
  ];
  const [isOpen, setIsOpen] = useToggle();
  const [name, setName] = useState("");
  const [inputFields, setInputFields] = useState(initialInputFields);
  const [errorMessage, setErrorMessage] = useState("");
  const [boardData, setBoardData] = useRecoilState(boardState);
  const addBoard = useDashboardStore((state) => state.addBoard);

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if board name is empty and if board name already exist
    if (name === "") {
      setErrorMessage("Board name cannot be empty");
      return;
    } else if (boardData.map((board) => board.name).includes(name)) {
      setErrorMessage("Board name already exist");
      return;
    }

    const newBoard = {
      name: name,
      id: uuidv4(),
      columns: inputFields,
    };

    addBoard(newBoard);

    setName("");
    setInputFields(initialInputFields);
    setIsOpen(false);
  };

  // if error message is not empty, clear error message after 3 seconds
  if (errorMessage !== "") {
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  }

  return (
    <>
      <li>
        <SidebarModalContainer className="nav-item" onClick={setIsOpen}>
          <IconBoard />
          <span className="nav-newBoard">+ create new board</span>
        </SidebarModalContainer>
      </li>
      <LayoutModal isOpen={isOpen} onRequestClose={setIsOpen} title="new board">
        <div className="modal-header">
          <h2 className="modal-title">Add New Board</h2>
        </div>
        <Form onSubmit={handleSubmit}>
          <Input
            labelText="Name"
            placeholder="e.g Web Design"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errorMessage}
            errorMessage={errorMessage}
          />
          <InputGenerator
            labelText={"Columns"}
            inputFields={inputFields}
            placeholder={inputFields.placeholder}
            setInputFields={setInputFields}
          />

          <Button type="submit" theme="primary" text="Create a New Board" />
        </Form>
      </LayoutModal>
    </>
  );
};

const SidebarModalContainer = styled.button`
  border: none;
  background: transparent;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.9rem;
  text-transform: capitalize;
  color: var(--main-purple) !important;

  img {
    padding-right: 16px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
