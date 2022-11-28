import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { boardState } from "../../../../store/store";
import { urlSplit } from "../../../../helpers/urlSplit";
import { EmptyBoard } from "../EmptyBoard";

export const Board = () => {
  let { name } = useParams();
  const boardData = useRecoilValue(boardState);

  return (
    <BoardContainer>
      {boardData.length !== 0 ? (
        boardData
          .filter((item) => urlSplit(item.name) === name)
          .map((item, index) => <p key={index}>{item.name}</p>)
      ) : (
        <EmptyBoard />
      )}
    </BoardContainer>
  );
};

const BoardContainer = styled.div``;
