import React from "react";
import styled from "styled-components";
import { LayoutModal } from "../../../components/Wrapper/LayoutModal";
import { Checkbox } from "../../../components/Form/Checkbox/index";
import { Select } from "../../../components/Form/Select";
import { CustomPopover } from "../../../components/Popover";
import { useToggle } from "../../../../hooks/useToggle";
import { EditTask } from "./EditTask";
import { DeleteTask } from "./DeleteTask";

export const TaskModal = ({
  open,
  setOpen,
  item,
  completedSubtasks,
  columns,
}) => {
  const [openDelete, setOpenDelete] = useToggle();
  const [openEdit, setOpenEdit] = useToggle();

  return (
    <LayoutModal isOpen={open} onRequestClose={setOpen}>
      <div className="modal-header">
        <h2 className="modal-title">{item.title}</h2>
        <CustomPopover
          children={
            <div
              className={`${
                openDelete || openEdit
                  ? "popoverInvisible"
                  : "popover popover-center"
              }`}
            >
              <EditTask
                openEdit={openEdit}
                setOpenEdit={setOpenEdit}
                setOpen={setOpen}
              />
              <DeleteTask
                openDelete={openDelete}
                setOpenDelete={setOpenDelete}
                setOpen={setOpen}
              />
            </div>
          }
        />
      </div>

      <p className="modal-paragraph">{item.description}</p>
      <Subtasks className="modal-subtasks">
        <Label>
          Subtasks ({completedSubtasks.length} of {item.subtasks.length})
        </Label>
        <div className="subtasks-wrapper">
          {item.subtasks.map((item, index) => {
            return (
              <Checkbox
                label={item.title}
                completed={item.isCompleted}
                key={index}
              />
            );
          })}
        </div>
      </Subtasks>

      <Select
        label="Current Status"
        currentItem={item.status}
        columns={columns}
      />
    </LayoutModal>
  );
};

const Subtasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  .subtasks-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #828fa3;
`;
