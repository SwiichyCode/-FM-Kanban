import React from "react";
import styled from "styled-components";
import { useToggle } from "../../../../hooks/useToggle";
import { DeleteBoard } from "../DeleteTask/DeleteBoard";
import { EditBoard } from "../EditBoard";
import { CustomPopover } from "../../../components/Popover";

export const ManageBoard = ({ boardName }) => {
  const [openDelete, setOpenDelete] = useToggle();
  const [openEdit, setOpenEdit] = useToggle();
  const [openPopover, setOpenPopover] = useToggle();

  return (
    <ManageBoardContainer>
      <CustomPopover
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
        position="bottom"
        parentState={openEdit || openDelete}
      >
        <EditBoard openEdit={openEdit} setOpenEdit={setOpenEdit} />
        <DeleteBoard
          openDelete={openDelete}
          setOpenDelete={setOpenDelete}
          boardName={boardName}
        />
      </CustomPopover>
    </ManageBoardContainer>
  );
};

const ManageBoardContainer = styled.div`
  padding-right: 3.2rem;
`;
