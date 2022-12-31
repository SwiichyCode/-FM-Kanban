import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { Button } from "../../components/Button";
import { useRecoilState } from "recoil";
import { boardState } from "../../../store/store";
import { urlSplit } from "../../../helpers/urlSplit";

export const DeleteTask = ({ openDelete, setOpenDelete, item }) => {
  const [boardData, setBoardData] = useRecoilState(boardState);
  let { name } = useParams();

  const deleteItem = () => {
    const newBoardData = [...boardData].map((board) => {
      if (urlSplit(board.name) === name) {
        return {
          ...board,
          columns: board.columns.map((column) => {
            if (column.name === item.status) {
              return {
                ...column,
                tasks: column.tasks.filter((task) => task.title !== item.title),
              };
            }
            return column;
          }),
        };
      }
      return board;
    });
    setBoardData(newBoardData);
    setOpenDelete();
  };

  return (
    <Container>
      <span onClick={setOpenDelete}>Delete Task</span>
      <LayoutModal
        isOpen={openDelete}
        onRequestClose={setOpenDelete}
        title="Edit Board"
      >
        <div className="modal-header">
          <h2 className="modal-title alert">Delete task</h2>
        </div>

        <p className="modal-paragraph">
          Are you sure you want to delete the '{item.title}' task and its
          subtasks? This action cannot be reversed.
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
