import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";
import { InputGeneratorTest } from "../../components/Form/Test/InputGeneratorTest";
import { TextArea } from "../../components/Form/TextArea";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { useParams } from "react-router-dom";
import useDashboardStore from "../../../store/dashboardStore";
import { Button } from "../../components/Button";

export const EditTask = ({ openEdit, setOpenEdit, item }) => {
  const [inputFields, setInputFields] = useState([]);
  const { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const currentBoard = board.find((board) => board.id === id);

  const [status, setStatus] = useState(
    currentBoard.columns.length > 0 ? currentBoard.columns[0].id : null
  );

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
            labelText={"Subtasks"}
          />

          <Select
            label="Status"
            columns={currentBoard.columns}
            setStatus={setStatus}
          />

          <Button theme="primary" text="Save Changes" type="submit" />
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
