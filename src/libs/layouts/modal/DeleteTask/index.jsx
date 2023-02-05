import React from "react";
import { useParams } from "react-router-dom";
import { ModalWrapper } from "../../../components/Wrapper/ModalWrapper";
import { ConfirmWrapper } from "../../../components/Wrapper/ConfirmWrapper";
import { Button } from "../../../components/Button";
import useDashboardStore from "../../../../store/dashboardStore";

export const DeleteTask = ({ openDelete, setOpenDelete, item }) => {
  const deleteTask = useDashboardStore((state) => state.deleteTask);
  let { id } = useParams();

  const deleteItem = () => {
    deleteTask(id, item.columnId, item.id);
    setOpenDelete();
  };

  return (
    <ConfirmWrapper status="delete">
      <span onClick={setOpenDelete}>Delete Task</span>
      <ModalWrapper
        isOpen={openDelete}
        onRequestClose={setOpenDelete}
        title="Edit Board"
        selector={"#root"}
        portalClassName="delete-task"
      >
        <div className="modal-header">
          <h2 className="modal-title alert">Delete task</h2>
        </div>

        <p className="modal-paragraph">
          Are you sure you want to delete the '{item.name}' task and its
          subtasks? This action cannot be reversed.
        </p>

        <div className="modal-box">
          <Button
            text="Delete"
            theme="destructive"
            onClick={deleteItem}
            type="button"
          />
          <Button text="Cancel" theme="secondary" onClick={setOpenDelete} />
        </div>
      </ModalWrapper>
    </ConfirmWrapper>
  );
};
