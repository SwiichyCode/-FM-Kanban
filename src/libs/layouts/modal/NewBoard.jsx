import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { boardState } from "../../../store/store";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { InputGenerator } from "../../components/Form/InputGenerator/index";
import { Input } from "../../components/Form/Input/index";
import { Button } from "../../components/Button";
import { useToggle } from "../../../hooks/useToggle";
import { IconBoard } from "../sidebar/SidebarIcon";

export const NewBoard = () => {
  const [isOpen, setIsOpen] = useToggle();
  const [name, setName] = useState("");
  const setBoardData = useSetRecoilState(boardState);
  const [inputFields, setInputFields] = useState([
    { name: "", placeholder: "Todo..." },
    { name: "", placeholder: "Doing..." },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setBoardData((oldBoardData) => [
      ...oldBoardData,
      {
        name: name,
        columns: inputFields,
      },
    ]);

    setName("");
    setInputFields([{ name: "", tasks: [] }]);
    setIsOpen(false);
  };

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
          />
          <InputGenerator
            label="Columns"
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
