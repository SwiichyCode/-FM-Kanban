import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { boardState } from "../../../../store/store";
import { LayoutModal } from "../../../components/Wrapper/LayoutModal";
import { InputGenerator } from "../../../components/Form/InputGenerator/index";
import { Input } from "../../../components/Form/Input/index";
import { Button } from "../../../components/Button";

export const NewBoard = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const setBoardData = useSetRecoilState(boardState);
  const [inputFields, setInputFields] = useState([{ name: "", tasks: [] }]);

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
          setInputFields={setInputFields}
        />

        <Button type="submit" theme="secondary" text="Create a New Board" />
      </Form>
    </LayoutModal>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
