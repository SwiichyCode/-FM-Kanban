import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { LayoutModal } from "../../../components/Wrapper/LayoutModal";
import { useToggle } from "../../../../hooks/useToggle";
import { Input } from "../../../components/Form/Input/index";
import { InputGenerator } from "../../../components/Form/InputGenerator/index";
import { Select } from "../../../components/Form/Select";

export const NewTask = ({ item }) => {
  const [open, setOpen] = useToggle();
  const [inputFields, setInputFields] = useState([{ name: "", tasks: [] }]);
  const { columns } = item;

  return (
    <Container>
      <Button
        text="+ Add New Task"
        theme="primary"
        maxW={164}
        size="xl"
        onClick={setOpen}
      />
      <LayoutModal isOpen={open} onRequestClose={setOpen}>
        <div className="modal-header">
          <h2 className="modal-title">Add New Task</h2>
        </div>
        <Form>
          <Input labelText="Title" placeholder="e.g Take coffee break" />
          <InputGenerator
            label="Subtasks"
            inputFields={inputFields}
            setInputFields={setInputFields}
          />
          <Select label="Status" columns={columns} />
        </Form>
      </LayoutModal>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
