import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { LayoutModal } from "../../../components/Wrapper/LayoutModal";

export const DeleteBoard = ({ openDelete, setOpenDelete }) => {
  return (
    <DeleteBoardContainer>
      <span onClick={setOpenDelete}>Delete Board</span>
      <LayoutModal
        isOpen={openDelete}
        onRequestClose={setOpenDelete}
        title="Delete this board?"
      >
        <p className="modal-paragraph">
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed.
        </p>

        <div className="modal-box">
          <Button text="Delete" theme="destructive" />
          <Button text="Cancel" theme="secondary" />
        </div>
      </LayoutModal>
    </DeleteBoardContainer>
  );
};

const DeleteBoardContainer = styled.div`
  span {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: var(--red);
    cursor: pointer;
  }
`;
