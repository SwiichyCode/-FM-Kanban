import React, { useCallback } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { useState } from "react";
import { useEffect } from "react";
import { urlSplit } from "../../../helpers/urlSplit";
import { boardState } from "../../../store/store";
import { Input } from "../../components/Form/Input";
import { InputGenerator } from "../../components/Form/InputGenerator";
import { Button } from "../../components/Button";

export const EditBoard = ({ openEdit, setOpenEdit, trigger = true }) => {
  const [boardData, setBoardData] = useRecoilState(boardState);
  const [actualBoard, setActualBoard] = useState({ name: "", columns: [] });
  const [inputFields, setInputFields] = useState([]);
  let { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!name && actualBoard) return;
    const actualboard = [...boardData].filter(
      (board) => urlSplit(board.name) === name
    );
    setActualBoard(...actualboard);

    return () => {
      setActualBoard({ name: "", columns: [] });
    };
  }, [name]);

  // Edit Board
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newBoardData = [...boardData].map((board) => {
        if (urlSplit(board.name) === name) {
          return {
            ...board,
            name: actualBoard.name,
            columns: inputFields,
          };
        }
        return board;
      });
      setBoardData(newBoardData);
      setOpenEdit(false);
      navigate(`/${urlSplit(actualBoard.name)}`);
    },
    [actualBoard, inputFields, name]
  );

  useEffect(() => {
    setInputFields(actualBoard.columns);

    return () => {
      setInputFields([]);
    };
  }, [actualBoard]);

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
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            labelText={"Board Name"}
            onChange={(e) =>
              setActualBoard({ ...actualBoard, name: e.target.value })
            }
            value={actualBoard.name}
          />
          <InputGenerator
            labelText={"Board Columns"}
            inputFields={inputFields}
            setInputFields={setInputFields}
          />
          <Button theme="primary" text="Save Changes" type={"submit"} />
        </Form>
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
