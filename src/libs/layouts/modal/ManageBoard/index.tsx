import React from "react";
import styled from "styled-components";
import { useToggle } from "../../../../hooks/useToggle";
import { DeleteBoard } from "../DeleteBoard";
import { EditBoard } from "../EditBoard";
import { CustomPopover } from "../../../components/Popover";

interface ManageBoardProps {
  boardName: string;
}

export const ManageBoard = ({ boardName }: ManageBoardProps) => {
  const { state: openDelete, toggle: setOpenDelete } = useToggle();
  const { state: openEdit, toggle: setOpenEdit } = useToggle();
  const { state: openPopover, toggle: setOpenPopover } = useToggle();

  return (
    <ManageBoardContainer>
      <CustomPopover
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
        position="bottom"
        // parentState={openEdit || openDelete}
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
