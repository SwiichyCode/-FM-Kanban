import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { boardState } from "../../data/store";
import { urlSplit } from "../../utils/urlSplit";

export const Board = () => {
  let { name } = useParams();
  const boardData = useRecoilValue(boardState);

  return (
    <BoardContainer>
      {boardData
        .filter((item) => urlSplit(item.name) === name)
        .map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
    </BoardContainer>
  );
};

const BoardContainer = styled.div``;
