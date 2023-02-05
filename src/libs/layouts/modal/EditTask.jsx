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
  const editTask = useDashboardStore((state) => state.editTask);
  const changeTaskColumn = useDashboardStore((state) => state.changeTaskColumn);
  const [status, setStatus] = useState(
    currentBoard.columns.length > 0 ? currentBoard.columns[0].id : null
  );
  const [actualBoard, setActualBoard] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (!currentBoard) return;

    setInputFields(item.subtasks);
    setActualBoard({ name: item.name, description: item.description });
  }, [currentBoard]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: item.id,
      name: actualBoard.name,
      description: actualBoard.description,
      subtasks: inputFields,
      columnId: status,
    };

    editTask(currentBoard.id, item.columnId, item.id, task);
    changeTaskColumn(currentBoard.id, item.columnId, item.id, status);
    setOpenEdit();
  };

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
          <Input
            name="name"
            labelText={"Task Name"}
            value={actualBoard.name}
            onChange={(e) =>
              setActualBoard({ ...actualBoard, name: e.target.value })
            }
          />

          <TextArea
            name="description"
            labelText={"Description"}
            value={actualBoard.description}
            onChange={(e) =>
              setActualBoard({ ...actualBoard, description: e.target.value })
            }
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

          <Button
            theme="primary"
            text="Save Changes"
            type="submit"
            onClick={handleSubmit}
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

const Form = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 2.4rem;
`;
