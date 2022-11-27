import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { boardState } from "../../../../store/store";
import { useSubtasks } from "../../../../hooks/useSubtasks";
import { LayoutModal } from "../../../components/Wrapper/LayoutModal";
import { SubtasksGenerator } from "../../../components/Form/SubtasksGenerator/index";
import { Input } from "../../../components/Form/Input/index";
import { Button } from "../../../components/Button";

export const NewBoard = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const setBoardData = useSetRecoilState(boardState);
  const { columns, handleChange, addFormFields, removeFormFields } =
    useSubtasks();

  const handleSubmit = (e) => {
    e.preventDefault();

    setBoardData((oldBoardData) => [
      ...oldBoardData,
      {
        name: name,
      },
    ]);

    setName("");
    setIsOpen(false);
  };

  return (
    <LayoutModal isOpen={isOpen} onRequestClose={setIsOpen} title="new board">
      <Form onSubmit={handleSubmit}>
        <Input
          labelText="Name"
          placeholder="e.g Web Design"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <SubtasksGenerator
          labelText="Columns"
          columns={columns}
          handleChange={handleChange}
          addFormFields={addFormFields}
          removeFormFields={removeFormFields}
        />
        <Button type="submit" theme="secondary" text="Create a New Board" />
      </Form>
    </LayoutModal>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
