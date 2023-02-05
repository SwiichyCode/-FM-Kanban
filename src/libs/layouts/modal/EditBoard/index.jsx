import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCurrentBoard } from "../../../../hooks/useCurrentBoard";
import { useRouteId } from "../../../../hooks/useRouteId";
import useDashboardStore from "../../../../store/dashboardStore";
import { ModalWrapper } from "../../../components/Wrapper/ModalWrapper";
import { FormWrapper } from "../../../components/Wrapper/FormWrapper";
import { Input } from "../../../components/Form/Input";
import { Button } from "../../../components/Button";
import { InputGeneratorTest } from "../../../components/Form/Test/InputGeneratorTest";
import { ConfirmWrapper } from "../../../components/Wrapper/ConfirmWrapper";

export const EditBoard = ({ openEdit, setOpenEdit, trigger = true }) => {
  const [inputFields, setInputFields] = useState([]);
  const editBoard = useDashboardStore((state) => state.editBoard);
  const id = useRouteId();
  const currentBoard = useCurrentBoard(id);

  const { register, handleSubmit } = useForm({
    defaultValues: currentBoard && {
      name: currentBoard.name,
      columns: currentBoard.columns,
    },
  });

  const onSubmit = (data) => {
    const board = {
      id: currentBoard.id,
      name: data.name,
      columns: data.columns,
    };

    editBoard(currentBoard.id, board);
    setOpenEdit();
  };

  return (
    <ConfirmWrapper status="edit">
      {trigger && <span onClick={setOpenEdit}>Edit board</span>}
      <ModalWrapper
        selector={"#root"}
        isOpen={openEdit}
        onRequestClose={setOpenEdit}
        title="Edit Board"
        portalClassName="edit-board"
      >
        <div className="modal-header">
          <h2 className="modal-title">Edit Board</h2>
        </div>
        {currentBoard && (
          <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="name"
              labelText={"Board Name"}
              register={register("name", { required: true })}
            />

            <InputGeneratorTest
              labelText={"Board Columns"}
              inputFields={currentBoard.columns}
              setInputFields={setInputFields}
            />

            <Button theme="primary" text="Save Changes" type={"submit"} />
          </FormWrapper>
        )}
      </ModalWrapper>
    </ConfirmWrapper>
  );
};
