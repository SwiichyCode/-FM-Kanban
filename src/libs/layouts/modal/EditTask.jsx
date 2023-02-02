import React from "react";
import styled from "styled-components";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";

export const EditTask = ({ openEdit, setOpenEdit }) => {
  return (
    <Container>
      <span onClick={setOpenEdit}>Edit Task</span>
      <LayoutModal
        isOpen={openEdit}
        onRequestClose={setOpenEdit}
        title="Edit Board"
      >
        <div className="modal-header">
          <h2 className="modal-title">Edit task</h2>
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
    color: var(--medium-grey);
    cursor: pointer;
  }
`;
