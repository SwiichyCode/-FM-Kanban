import React from "react";
import styled from "styled-components";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";

export const DeleteTask = ({ openDelete, setOpenDelete }) => {
  return (
    <Container>
      <span onClick={setOpenDelete}>Delete Task</span>
      <LayoutModal
        isOpen={openDelete}
        onRequestClose={setOpenDelete}
        title="Edit Board"
      >
        <div className="modal-header">
          <h2 className="modal-title">Delete task</h2>
        </div>
      </LayoutModal>
    </Container>
  );
};

const Container = styled.div`
  span {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: var(--red);
    cursor: pointer;
  }
`;
