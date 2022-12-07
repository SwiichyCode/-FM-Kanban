import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Button } from "../../components/Button";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { boardState } from "../../../store/store";
import { urlSplit } from "../../../helpers/urlSplit";

export const DeleteBoard = ({ openDelete, setOpenDelete }) => {
  const [boardData, setBoardData] = useRecoilState(boardState);
  let { name } = useParams();
  let navigate = useNavigate();

  const deleteItem = () => {
    const newBoard = [...boardData].filter(
      (board) => urlSplit(board.name) != name
    );

    setBoardData(newBoard);
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
        <p className="modal-paragraph">
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed.
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
