import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { Checkbox } from "../../components/Form/Checkbox/index";
import { Select } from "../../components/Form/Select";
import { CustomPopover } from "../../components/Popover";
import { useToggle } from "../../../hooks/useToggle";
import { EditTask } from "./EditTask";
import { DeleteTask } from "./DeleteTask";
import { useRecoilState } from "recoil";
import { boardState } from "../../../store/store";

export const TaskModal = ({
  open,
  setOpen,
  item,
  completedSubtasks,
  columns,
}) => {
  const [openDelete, setOpenDelete] = useToggle();
  const [openEdit, setOpenEdit] = useToggle();
  const [visible, setVisible] = useState();
  const [boardData, setBoardData] = useRecoilState(boardState);
  const [status, setStatus] = useState("");

  useEffect(() => {
    openDelete || openEdit ? setVisible(false) : setVisible(true);
  }, [openDelete, openEdit]);

  return (
    <LayoutModal isOpen={open} onRequestClose={setOpen} visibility={visible}>
      <div className="modal-header">
        <h2 className="modal-title">{item.name}</h2>
        <CustomPopover
          state={[openDelete, openEdit]}
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
                item={item}
              />
              <DeleteTask
                openDelete={openDelete}
                setOpenDelete={setOpenDelete}
                setOpen={setOpen}
                item={item}
                columns={columns}
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
        setStatus={setStatus}
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
