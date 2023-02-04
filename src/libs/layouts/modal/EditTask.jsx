import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "../../components/Form/Input";
import { InputGeneratorTest } from "../../components/Form/Test/InputGeneratorTest";
import { TextArea } from "../../components/Form/TextArea";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";

export const EditTask = ({ openEdit, setOpenEdit, item }) => {
  const [inputFields, setInputFields] = useState([]);

  useEffect(() => {
    setInputFields(item.subtasks);
  }, [item.subtasks]);

  console.log(inputFields);
  return (
    <Container>
      <span onClick={setOpenEdit}>Edit Task</span>
      <LayoutModal
        isOpen={openEdit}
        onRequestClose={setOpenEdit}
        title="Edit Board"
      >
        <div className="modal-header">
          <h2 className="modal-title">Edit task</h2>
        </div>

        <Form>
          <Input name="name" labelText={"Task Name"} value={item.name} />

          <TextArea
            name="description"
            labelText={"Description"}
            value={item.description}
          />

          <InputGeneratorTest
            inputFields={item.subtasks}
            labelText={"azdzad"}
          />
        </Form>
      </LayoutModal>
    </Container>
  );
};

const Container = styled.div`
  span {
    font-weight: var(--font-medium);
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: var(--color-grey);
    cursor: pointer;
  }
`;

const Form = styled.form`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 2.4rem;
`;
