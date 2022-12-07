import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { LayoutModal } from "../../../components/Wrapper/LayoutModal";
import { useToggle } from "../../../../hooks/useToggle";
import { Input } from "../../../components/Form/Input/index";
import { InputGenerator } from "../../../components/Form/InputGenerator/index";
import { Select } from "../../../components/Form/Select";
import { TextArea } from "../../../components/Form/TextArea";
import { useSetRecoilState } from "recoil";
import { boardState } from "../../../../store/store";

export const NewTask = ({ item }) => {
  const [open, setOpen] = useToggle();
  const { columns } = item;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [inputFields, setInputFields] = useState([{ name: "", tasks: [] }]);
  const [status, setStatus] = useState("");

  const setBoardData = useSetRecoilState(boardState);

  // console.log(setBoardData((oldata) => [...oldata]));

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentIndex = columns.findIndex((item) => item.name === status);
    const addTask = Object.assign({}, columns[currentIndex]);
    addTask.tasks = [...addTask.tasks, { title: title }];

    const newColumn = [...columns];
    newColumn[currentIndex] = addTask;

    console.log(newColumn);
  };

  // console.log(title, description, inputFields, status);
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
        <Form onSubmit={handleSubmit}>
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
            setInputFields={setInputFields}
          />
          <Select
            label="Status"
            columns={columns}
            currentItem={item.status}
            setStatus={setStatus}
          />
          <Button theme="primary" text="Create Task" type="submit" />
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
