import React from "react";
import styled from "styled-components";
import { useToggle } from "../../../hooks/useToggle";
import { DeleteBoard } from "./DeleteBoard";
import { EditBoard } from "./EditBoard";
import { CustomPopover } from "../../components/Popover";

export const ManageBoard = ({ boardName }) => {
  const [openDelete, setOpenDelete] = useToggle();
  const [openEdit, setOpenEdit] = useToggle();

  return (
    <ManageBoardContainer>
      <CustomPopover
        state={[openDelete, openEdit]}
        children={
          <div className="popover">
            <EditBoard openEdit={openEdit} setOpenEdit={setOpenEdit} />
            <DeleteBoard
              openDelete={openDelete}
              setOpenDelete={setOpenDelete}
              boardName={boardName}
            />
          </div>
        }
      />
    </ManageBoardContainer>
  );
};

const ManageBoardContainer = styled.div`
  padding-right: 3.2rem;
`;
