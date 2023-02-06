import React, { useEffect, useState } from "react";
import { ModalWrapper } from "../../../components/Wrapper/ModalWrapper";
import { Checkbox } from "../../../components/Form/Checkbox/index";
import { CustomPopover } from "../../../components/Popover";
import { useToggle } from "../../../../hooks/useToggle";
import { EditTask } from "../EditTask";
import { DeleteTask } from "../DeleteTask";
import useDashboardStore from "../../../../store/dashboardStore";
import { Label } from "../../../components/Form/Label";
import { useCurrentBoard } from "../../../../hooks/useCurrentBoard";
import { useRouteId } from "../../../../hooks/useRouteId";
import * as S from "./styles";
import Select from "react-select";

export const TaskModal = ({
  open,
  setOpen,
  item,
  completedSubtasks,
  columns,
}) => {
  const [openDelete, setOpenDelete] = useToggle();
  const [openEdit, setOpenEdit] = useToggle();
  const [openPopover, setOpenPopover] = useToggle();
  const [visible, setVisible] = useState();
  const [status, setStatus] = useState("");
  const toggleSubtask = useDashboardStore((state) => state.toggleSubtask);
  const editTask = useDashboardStore((state) => state.editTask);
  const changeTaskColumn = useDashboardStore((state) => state.changeTaskColumn);

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
          openPopover={openPopover}
          setOpenPopover={setOpenPopover}
          position={"bottom-center"}
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
        </CustomPopover>
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
        options={currentBoard.columns.map((column) => ({
          value: column.id,
          label: column.name,
        }))}
        onChange={(e) => {
          setStatus(e.value);

          editTask(currentBoard.id, item.columnId, item.id, {
            ...item,
            columnId: e.value,
          });
          changeTaskColumn(currentBoard.id, item.columnId, item.id, e.value);
        }}
      />
    </ModalWrapper>
  );
};
