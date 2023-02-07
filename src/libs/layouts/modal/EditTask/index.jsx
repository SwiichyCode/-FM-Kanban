import React, { useState, useEffect } from "react";
import { Input } from "../../../components/Form/Input";
import { Select } from "../../../components/Form/Select";
import { InputGenerator } from "../../../components/Form/InputGenerator";
import { TextArea } from "../../../components/Form/TextArea";
import { ModalWrapper } from "../../../components/Wrapper/ModalWrapper";
import { useParams } from "react-router-dom";
import useDashboardStore from "../../../../store/dashboardStore";
import { Button } from "../../../components/Button";
import { ConfirmWrapper } from "../../../components/Wrapper/ConfirmWrapper";
import { FormWrapper } from "../../../components/Wrapper/FormWrapper";

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
    <ConfirmWrapper status="edit">
      <span onClick={setOpenEdit}>Edit Task</span>
      <ModalWrapper
        selector={"#root"}
        isOpen={openEdit}
        onRequestClose={setOpenEdit}
        title="Edit Board"
        portalClassName="edit-task"
      >
        <div className="modal-header">
          <h2 className="modal-title">Edit task</h2>
        </div>

        <FormWrapper>
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

          <InputGenerator inputFields={item.subtasks} labelText={"Subtasks"} />

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
        </FormWrapper>
      </ModalWrapper>
    </ConfirmWrapper>
  );
};
