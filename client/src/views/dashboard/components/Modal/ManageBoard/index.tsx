import { useToggle } from "../../../../../hooks/useToggle";
import { DeleteBoard } from "../DeleteBoard";
// import { EditBoard } from "../EditBoard";
import { CustomPopover } from "../../Popover";
import styled from "styled-components";

interface ManageBoardProps {
  boardName: string;
}

const ManageBoardContainer = styled.div`
  padding-right: 3.2rem;
`;

export const ManageBoard = ({ boardName }: ManageBoardProps) => {
  const { state: openDelete, toggle: setOpenDelete } = useToggle();
  const { state: openEdit, toggle: setOpenEdit } = useToggle();

  return (
    <ManageBoardContainer>
      <CustomPopover
        state={[openDelete, openEdit]}
        children={
          <div className="popover">
            {/* <EditBoard openEdit={openEdit} setOpenEdit={setOpenEdit} /> */}
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
