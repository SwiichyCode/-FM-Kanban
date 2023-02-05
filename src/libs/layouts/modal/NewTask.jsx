import styled from "styled-components";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";
import { Controller, useForm } from "react-hook-form";
import useDashboardStore from "../../../store/dashboardStore";
import { useToggle } from "../../../hooks/useToggle";
import { useRouteId } from "../../../hooks/useRouteId";
import { useCurrentBoard } from "../../../hooks/useCurrentBoard";
import { Button } from "../../components/Button";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { Input } from "../../components/Form/Input/index";
import { TextArea } from "../../components/Form/TextArea";

import { InputGenerator } from "../../components/Form/InputGenerator/index";

export const NewTask = () => {
  const [open, setOpen] = useToggle();
  const { register, handleSubmit, control } = useForm();
  const id = useRouteId();
  const currentBoard = useCurrentBoard(id);
  const addTask = useDashboardStore((state) => state.addTask);

  const onSubmit = (data) => {
    const newTask = {
      id: uuidv4(),
      name: data.title,
      description: data.description,

      subtasks: [],
      columnId: data.status.value,
    };

    addTask(id, data.status.value, newTask);
    setOpen();
  };

  // const [inputFields, setInputFields] = useState([]);

  return (
    <Container id="new-task">
      <Button
        text="+ Add New Task"
        theme="primary"
        maxW={164}
        size="xl"
        onClick={setOpen}
      />

      {currentBoard && (
        <LayoutModal
          isOpen={open}
          onRequestClose={setOpen}
          portalClassName="new task"
          selector="#new-task"
        >
          <div className="modal-header">
            <h2 className="modal-title">Add New Task</h2>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              labelText="Title"
              placeholder="e.g Take coffee break"
              register={register("title", { required: true })}
            />
            <TextArea
              labelText="Description"
              register={register("description", { required: false })}
            />
            {/* <InputGenerator
              label="Subtasks"
              inputFields={inputFields}
              placeholder={inputFields.placeholder}
              setInputFields={setInputFields}
              // register={register("subtasks", { required: true })}
            /> */}

            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select Status"
                  options={currentBoard.columns.map((column) => ({
                    value: column.id,
                    label: column.name,
                  }))}
                />
              )}
            />

            <Button
              theme="primary"
              text="Create Task"
              type="submit"
              onClick={handleSubmit}
            />
          </Form>
        </LayoutModal>
        //test
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Form = styled.form`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 2.4rem;
`;
