import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { LayoutModal } from "../../../components/Wrapper/LayoutModal";

export const EditBoard = ({ openEdit, setOpenEdit }) => {
  return (
    <DeleteBoardContainer>
      <span onClick={setOpenEdit}>Edit board</span>
      <LayoutModal
        isOpen={openEdit}
        onRequestClose={setOpenEdit}
        title="Edit Board"
      ></LayoutModal>
    </DeleteBoardContainer>
  );
};

const DeleteBoardContainer = styled.div`
  span {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: var(--medium-grey);
    cursor: pointer;
  }

  p {
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: #828fa3;
  }

  .box {
    display: flex;
    gap: 16px;
  }
`;
