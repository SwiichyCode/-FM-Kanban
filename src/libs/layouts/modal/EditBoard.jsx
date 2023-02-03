import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { Input } from "../../components/Form/Input";
import { InputGenerator } from "../../components/Form/InputGenerator";
import { Button } from "../../components/Button";
import useDashboardStore from "../../../store/dashboardStore";
import { InputGeneratorTest } from "../../components/Form/Test/InputGeneratorTest";

export const EditBoard = ({ openEdit, setOpenEdit, trigger = true }) => {
  const [actualBoard, setActualBoard] = useState({ name: "", columns: [] });
  const [inputFields, setInputFields] = useState([]);
  let { id } = useParams();
  const board = useDashboardStore((state) => state.dashboard);
  const editBoard = useDashboardStore((state) => state.editBoard);
  const currentBoard = board.find((board) => board.id === id);

  useEffect(() => {
    if (!currentBoard) return;

    setActualBoard({ name: currentBoard.name });
    setInputFields(currentBoard.columns);
  }, [currentBoard]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const board = {
      id: currentBoard.id,
      name: actualBoard.name,
      columns: inputFields,
    };

    editBoard(currentBoard.id, board);
    setOpenEdit();
  };

  return (
    <DeleteBoardContainer>
      {trigger && <span onClick={setOpenEdit}>Edit board</span>}
      <LayoutModal
        isOpen={openEdit}
        onRequestClose={setOpenEdit}
        title="Edit Board"
      >
        <div className="modal-header">
          <h2 className="modal-title">Edit Board</h2>
        </div>
        {currentBoard && (
          <Form onSubmit={handleSubmit}>
            <Input
              name="name"
              labelText={"Board Name"}
              value={actualBoard.name}
              onChange={(e) =>
                setActualBoard({ ...actualBoard, name: e.target.value })
              }
              defaultValue={currentBoard.name}
            />

            <InputGeneratorTest
              labelText={"Board Columns"}
              inputFields={currentBoard.columns}
              setInputFields={setInputFields}
            />

            <Button theme="primary" text="Save Changes" type={"submit"} />
          </Form>
        )}
      </LayoutModal>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
