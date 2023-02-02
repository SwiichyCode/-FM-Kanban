import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import useDashboardStore from "../../../store/dashboardStore";
import { Button } from "../../components/Button";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";

export const DeleteBoard = ({ openDelete, setOpenDelete, boardName }) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const deleteBoard = useDashboardStore((state) => state.deleteBoard);

  const deleteItem = () => {
    deleteBoard(id);
    setOpenDelete();

    navigate("/");
  };

  return (
    <DeleteBoardContainer>
      <span onClick={setOpenDelete}>Delete Board</span>
      <LayoutModal
        isOpen={openDelete}
        onRequestClose={setOpenDelete}
        title="Delete this board?"
      >
        <div className="modal-header">
          <h2 className="modal-title alert">Delete this board?</h2>
        </div>
        <p className="modal-paragraph">
          Are you sure you want to delete the {boardName} board? This action
          will remove all columns and tasks and cannot be reversed.
        </p>

        <div className="modal-box">
          <Button
            text="Delete"
            theme="destructive"
            onClick={deleteItem}
            type="button"
          />
          <Button text="Cancel" theme="secondary" onClick={setOpenDelete} />
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
