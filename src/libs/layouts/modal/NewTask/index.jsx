import Select from "react-select";
import { v4 as uuidv4 } from "uuid";
import { Controller, useForm } from "react-hook-form";
import useDashboardStore from "../../../../store/dashboardStore";
import { useToggle } from "../../../../hooks/useToggle";
import { useRouteId } from "../../../../hooks/useRouteId";
import { useCurrentBoard } from "../../../../hooks/useCurrentBoard";
import { Button } from "../../../components/Button";
import { ModalWrapper } from "../../../components/Wrapper/ModalWrapper";
import { Input } from "../../../components/Form/Input/index";
import { TextArea } from "../../../components/Form/TextArea";
import { FormWrapper } from "../../../components/Wrapper/FormWrapper";
import { schema } from "./schema";
import * as S from "./styles";
import { InputGenerator } from "../../../components/Form/InputGenerator/index";

import { yupResolver } from "@hookform/resolvers/yup";

export const NewTask = () => {
  const [open, setOpen] = useToggle();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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

    reset();
    setOpen();
  };

  // const [inputFields, setInputFields] = useState([]);

  return (
    <S.Container id="new-task">
      <Button
        text="+ Add New Task"
        theme="primary"
        width={139}
        size="xl"
        onClick={setOpen}
      />

      {currentBoard && (
        <ModalWrapper
          isOpen={open}
          onRequestClose={setOpen}
          portalClassName="new task"
          selector="#new-task"
        >
          <div className="modal-header">
            <h2 className="modal-title">Add New Task</h2>
          </div>
          <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Input
              labelText="Title"
              placeholder="e.g Take coffee break"
              register={register("title", { required: true })}
              error={errors.title?.message}
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
                <S.Wrapper>
                  <Select
                    {...field}
                    placeholder="Select Status"
                    options={currentBoard.columns.map((column) => ({
                      value: column.id,
                      label: column.name,
                    }))}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        boxShadow: "none",
                        borderColor: state.isFocused
                          ? "#635FC7"
                          : "rgba(130, 143, 163, 0.25)",

                        "&:hover": {
                          border: "1px solid #635FC7",
                        },
                      }),
                    }}
                  />
                  {errors.status?.message && (
                    <S.Error>{errors.status?.message}</S.Error>
                  )}
                </S.Wrapper>
              )}
            />
            {/* // Create a error Component and wrap select with it */}

            <Button
              theme="primary"
              text="Create Task"
              type="submit"
              onClick={handleSubmit}
            />
          </FormWrapper>
        </ModalWrapper>
      )}
    </S.Container>
  );
};
