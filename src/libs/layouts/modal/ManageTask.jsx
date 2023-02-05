import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { Checkbox } from "../../components/Form/Checkbox/index";
import { Select } from "../../components/Form/Select";
import { CustomPopover } from "../../components/Popover";
import { useToggle } from "../../../hooks/useToggle";
import { EditTask } from "./EditTask";
import { DeleteTask } from "./DeleteTask";
import useDashboardStore from "../../../store/dashboardStore";
import { useParams } from "react-router-dom";
import { Label } from "../../components/Form/Label";

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
  const [status, setStatus] = useState("");
  const toggleSubtask = useDashboardStore((state) => state.toggleSubtask);
  // const toggleTaskColumn = useDashboardStore((state) => state.toggleTaskColumn);
  const board = useDashboardStore((state) => state.dashboard);
  const { id } = useParams();

  const currentBoard = board.find((item) => item.id === id);

  // console.log(status);

  useEffect(() => {
    openDelete || openEdit ? setVisible(false) : setVisible(true);
  }, [openDelete, openEdit]);

  return (
    <LayoutModal
      selector={"#root"}
      isOpen={open}
      onRequestClose={setOpen}
      visibility={visible}
      portalClassName="task-modal"
    >
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
        <Label
          labelText={`Subtasks (${completedSubtasks.length} of ${item.subtasks.length})`}
        />
        <div className="subtasks-wrapper">
          {item.subtasks.map((i, index) => {
            return (
              <Checkbox
                label={i.title}
                completed={i.isCompleted}
                key={index}
                onChange={() =>
                  toggleSubtask(currentBoard.id, item.columnId, item.id, i.id)
                }
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
        // onChange={() =>
        //   toggleTaskColumn(currentBoard.id, item.columnId, item.id, status)
        // }
      />
    </LayoutModal>
  );
};

const Subtasks = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 1.6rem;
  margin-bottom: 2.4rem;

  .subtasks-wrapper {
    ${({ theme }) => theme.mixins.flexColumn}
    gap: .8rem;
  }
`;
