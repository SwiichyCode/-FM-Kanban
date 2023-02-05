import React, { useEffect, useState } from "react";
import { ModalWrapper } from "../../../components/Wrapper/ModalWrapper";
import { Checkbox } from "../../../components/Form/Checkbox/index";
import { Select } from "../../../components/Form/Select";
import { CustomPopover } from "../../../components/Popover";
import { useToggle } from "../../../../hooks/useToggle";
import { EditTask } from "../EditTask";
import { DeleteTask } from "../DeleteTask";
import useDashboardStore from "../../../../store/dashboardStore";
import { Label } from "../../../components/Form/Label";
import { useCurrentBoard } from "../../../../hooks/useCurrentBoard";
import { useRouteId } from "../../../../hooks/useRouteId";
import * as S from "./styles";

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
  // const [status, setStatus] = useState("");
  const toggleSubtask = useDashboardStore((state) => state.toggleSubtask);

  const id = useRouteId();
  const currentBoard = useCurrentBoard(id);

  // ???
  useEffect(() => {
    openDelete || openEdit ? setVisible(false) : setVisible(true);
  }, [openDelete, openEdit]);

  return (
    <ModalWrapper
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
              />
            </div>
          }
        />
      </div>

      <p className="modal-paragraph">{item.description}</p>
      <S.Subtasks className="modal-subtasks">
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
      </S.Subtasks>

      <Select
        label="Current Status"
        currentItem={item.status}
        columns={columns}
        // setStatus={setStatus}
        // onChange={() =>
        //   toggleTaskColumn(currentBoard.id, item.columnId, item.id, status)
        // }
      />
    </ModalWrapper>
  );
};
