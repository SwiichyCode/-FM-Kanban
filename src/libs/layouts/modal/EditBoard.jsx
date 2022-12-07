import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LayoutModal } from "../../components/Wrapper/LayoutModal";
import { useState } from "react";
import { useEffect } from "react";
import { urlSplit } from "../../../helpers/urlSplit";
import { boardState } from "../../../store/store";
import { Input } from "../../components/Form/Input";
import { InputGenerator } from "../../components/Form/InputGenerator";
import { Button } from "../../components/Button";

export const EditBoard = ({ openEdit, setOpenEdit }) => {
  const [boardData, setBoardData] = useRecoilState(boardState);
  const [actualBoard, setActualBoard] = useState({ name: "", columns: [] });
  const [boardName, setBoardName] = useState("");
  const [inputFields, setInputFields] = useState([]);

  let { name } = useParams();

  useEffect(() => {
    const actualboard = [...boardData].filter(
      (board) => urlSplit(board.name) === name
    );

    setActualBoard(...actualboard);
  }, [name]);

  useEffect(() => {
    const inputfields = actualBoard.columns;
    setInputFields(inputfields);
  });

  // console.log(inputFields.map((item) => item.name));

  return (
    <DeleteBoardContainer>
      <span onClick={setOpenEdit}>Edit board</span>
      <LayoutModal
        isOpen={openEdit}
        onRequestClose={setOpenEdit}
        title="Edit Board"
      >
        <div className="modal-header">
          <h2 className="modal-title">Edit Board</h2>
        </div>
        <Form>
          <Input
            labelText={"Board Name"}
            name={boardName}
            onChange={(e) => setBoardName(e.target.value)}
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
