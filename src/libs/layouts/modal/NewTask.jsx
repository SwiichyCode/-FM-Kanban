import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { useToggle } from "../../../hooks/useToggle";
import { Input } from "../../components/Form/Input/index";
import { InputGenerator } from "../../components/Form/InputGenerator/index";
import { Select } from "../../components/Form/Select";
import { TextArea } from "../../components/Form/TextArea";
import { useRecoilState } from "recoil";
import { boardState } from "../../../store/store";
import { urlSplit } from "../../../helpers/urlSplit";
import useDashboardStore from "../../../store/dashboardStore";
import { v4 as uuidv4 } from "uuid";

export const NewTask = () => {
  const [open, setOpen] = useToggle();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [inputFields, setInputFields] = useState([
    // { name: "", placeholder: "e.g Make coffee", tasks: [] },
    // { name: "", placeholder: "e.g Drink coffee & smile", tasks: [] },
  ]);
  const [status, setStatus] = useState("");

  let { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const addTask = useDashboardStore((state) => state.addTask);
  const currentBoard = board.find((item) => item.id === id);

  // console.log(currentBoard);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      name: title,
      description: description,
      subtasks: inputFields,
      columnId: status,
    };

    console.log(id, status, newTask);

    addTask(id, status, newTask);
    // setOpen();
  };

  console.log(board);

  return (
    <Container>
      <Button
        text="+ Add New Task"
        theme="primary"
        maxW={164}
        size="xl"
        onClick={setOpen}
      />

      {currentBoard && (
        <LayoutModal isOpen={open} onRequestClose={setOpen}>
          <div className="modal-header">
            <h2 className="modal-title">Add New Task</h2>
          </div>
          <Form>
            <Input
              labelText="Title"
              placeholder="e.g Take coffee break"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <TextArea
              labelText="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <InputGenerator
              label="Subtasks"
              inputFields={inputFields}
              placeholder={inputFields.placeholder}
              setInputFields={setInputFields}
            />
            {/* <Select
              label="Status"
              columns={currentBoard.columns}
              // currentItem={currentBoard.status}
              setStatus={setStatus}
            />
            <select> */}
            <select>
              {currentBoard &&
                currentBoard.columns.map((item) => {
                  return (
                    <option onClick={() => setStatus(item.id)}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <Button
              theme="primary"
              text="Create Task"
              type="submit"
              onClick={handleSubmit}
            />
          </Form>
        </LayoutModal>
      )}
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
