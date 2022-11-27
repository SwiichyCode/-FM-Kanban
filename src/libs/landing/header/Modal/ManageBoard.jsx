import React from "react";
import styled from "styled-components";
import { Popover } from "react-tiny-popover";
import IconManage from "../../../../assets/icon-vertical-ellipsis.svg";
import { useToggle } from "../../../../hooks/useToggle";
import { DeleteBoard } from "./DeleteBoard";
import { EditBoard } from "./EditBoard";

const PopoverContent = ({
  openDelete,
  setOpenDelete,
  openEdit,
  setOpenEdit,
}) => {
  return (
    <div className="popover">
      <EditBoard openEdit={openEdit} setOpenEdit={setOpenEdit} />
      <DeleteBoard openDelete={openDelete} setOpenDelete={setOpenDelete} />
    </div>
  );
};

export const ManageBoard = () => {
  const [openDelete, setOpenDelete] = useToggle();
  const [openEdit, setOpenEdit] = useToggle();
  const [isOpenPopover, setIsOpenPopover] = useToggle();

  const onClickOutside = () => {
    if (openDelete || openEdit) return;

    setIsOpenPopover(false);
  };

  return (
    <ManageBoardContainer>
      <Popover
        isOpen={isOpenPopover}
        positions={["bottom", "right"]} // preferred positions by priority
        content={
          <PopoverContent
            setIsOpenPopover={setIsOpenPopover}
            openDelete={openDelete}
            setOpenDelete={setOpenDelete}
            openEdit={openEdit}
            setOpenEdit={setOpenEdit}
          />
        }
        onClickOutside={() => onClickOutside()}
      >
        <img
          onClick={() => setIsOpenPopover(!isOpenPopover)}
          src={IconManage}
          alt=""
        />
      </Popover>
    </ManageBoardContainer>
  );
};

const ManageBoardContainer = styled.div`
  padding-right: 32px;

  img {
    cursor: pointer;
  }
`;
